import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ 
  handleSearch,
  handleChangeIsShort,
  searchValue,
  setSearchValue,
  isShortFilm,
  setIsShortFilm
}) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch();
  }

  const handleChangeSearchValue = (evt) => {
    setSearchValue(evt.target.value);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__search-bar">
        <input 
        name="searchForm"
        id="search-form"
        type="text"
        placeholder="Фильм"
        value={searchValue}
        onChange={handleChangeSearchValue}
        className="search-form__input"/>
        <button className="search-form__button" type="submit">Поиск</button>
      </div>
      <FilterCheckbox isShortFilm={isShortFilm} setIsShortFilm={setIsShortFilm} handleChangeIsShort={handleChangeIsShort} />
      <hr className="search-form__underline"/>
    </form>
  );
}

export default SearchForm;