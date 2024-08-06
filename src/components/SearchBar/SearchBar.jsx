import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  function handleSubmitInput(evt) {
    setQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    setQuery("");
  }
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleSubmitInput}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
