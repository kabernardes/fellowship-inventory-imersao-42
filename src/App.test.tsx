import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { fellowship } from '../src/data/fellowship';

describe('Fellowship Inventory App', () => {
  it('renders all heroes', () => {
    render(<App />);
    fellowship.forEach((hero) => {
      expect(screen.getByText(hero.name)).toBeInTheDocument();
    });
  });

  it('filters heroes by search', async () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search heroes...');
    await userEvent.type(searchInput, 'Frodo');

    expect(screen.getByText('Frodo')).toBeInTheDocument();
    expect(screen.queryByText('Aragorn')).not.toBeInTheDocument();
  });

  it('adds and removes a hero from the mission', async () => {
    render(<App />);
    const button = screen.getAllByText('Add to Mission')[0];
    await userEvent.click(button);

    const firstHero = fellowship[0];
    expect(screen.getAllByText(firstHero.name)).toHaveLength(2);

    const removeButton = screen.getByText('Remove');
    await userEvent.click(removeButton);
    expect(screen.getAllByText(firstHero.name)).toHaveLength(1);
  });

  it("disables 'Add to Mission' button if hero is already in mission", async () => {
    render(<App />);
    const button = screen.getAllByText('Add to Mission')[0];
    await userEvent.click(button);

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Already in Mission');
  });

  it('validates mission rules', async () => {
    render(<App />);

    const startButton = screen.getByText('Start Mission');
    await userEvent.click(startButton);

    expect(
      screen.getByText(/You must select heroes before starting/)
    ).toBeInTheDocument();

    // Add only a Hobbit
    const hobbitButton = screen.getAllByText('Add to Mission')[0];
    await userEvent.click(hobbitButton);
    await userEvent.click(startButton);

    expect(
      screen.getByText(/requires at least one Hobbit and one Wizard/)
    ).toBeInTheDocument();

    // Add a Wizard
    const wizardButton = screen
      .getAllByText('Add to Mission')
      .find((b) => b.parentElement?.textContent?.includes('Gandalf'));
    if (wizardButton) await userEvent.click(wizardButton);

    await userEvent.click(startButton);
    expect(screen.getByText(/The mission begins/)).toBeInTheDocument();
  });
});
