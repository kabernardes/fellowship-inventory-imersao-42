
# Fellowship Inventory

No desenvolvimento moderno de aplicações front-end, é comum que projetos em React cresçam rapidamente, acumulando código complexo e difícil de manter. Componentização é uma prática essencial para organizar a interface em partes reutilizáveis e de responsabilidade única, facilitando manutenção, escalabilidade e legibilidade do código.
Entretanto, iniciar uma refatoração em projetos existentes pode ser arriscado. Testes automatizados desempenham um papel crucial ao garantir que mudanças estruturais não quebrem funcionalidades existentes.

Nesta palestra, será apresentado um projeto inicial em React e TypeScript, o **Inventário da Sociedade do Anel**, que está funcionando e testado, mas ainda não componentizado. Através de uma refatoração guiada pelos testes, será demonstrado como organizar o código em componentes sem comprometer o funcionamento da aplicação.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## Como rodar o projeto

1. **Instale as dependências:**
  ```bash
  npm install
  ```

2. **Execute em modo desenvolvimento:**
  ```bash
  npm run dev
  ```
  O projeto estará disponível em `http://localhost:5173` (ou porta informada no terminal).

3. **Build para produção:**
  ```bash
  npm run build
  ```
  Os arquivos finais estarão na pasta `dist/`.

## Sobre

Este projeto faz parte do programa de formação da CodeMiner42, Imersão 42 e tem como objetivo praticar conceitos de frontend moderno, componentização e integração com ferramentas de desenvolvimento ágil.

---

Caso tenha dúvidas ou sugestões, fique à vontade para abrir uma issue ou contribuir!