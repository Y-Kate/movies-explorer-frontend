import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css'

function SearchForm() {

  return (
    <div className="search-form">
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
    </div>
  );
}

export default SearchForm;