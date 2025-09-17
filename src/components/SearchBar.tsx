type SearchBarProps = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange, placeholder }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
