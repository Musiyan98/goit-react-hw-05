import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    if (evt.target.elements.searchQuery.value.trim() === '') {
      toast.error('Oops, seem to have you entered anything');
      return;
    }

    onSearch(evt.target.elements.searchQuery.value);
    evt.target.reset();
  };

  return (
    <form className={css.searchBarForm} onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search film"
        name="searchQuery"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
