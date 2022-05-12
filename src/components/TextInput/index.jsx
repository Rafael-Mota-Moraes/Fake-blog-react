import "./styles.css";

export function TextInput({ searchValue, handleChange }) {
  return (
    <input
      onChange={handleChange}
      value={searchValue}
      type="search"
      className="search-input"
      placeholder="Pesquise por post"
    />
  );
}
