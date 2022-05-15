import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {

  return (
    <form className="search-form">
      <div className="search-form__search-bar">
        <input 
        required
        name="searchForm"
        id="search-form"
        type="text"
        placeholder="Фильм" 
        className="search-form__input"/>
        <button className="search-form__button" type="submit">Поиск</button>
      </div>
      <FilterCheckbox />
      <hr className="search-form__underline"/>
    </form>
  );
}

export default SearchForm;