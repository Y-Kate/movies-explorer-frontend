import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ isShortFilm, setIsShortFilm, handleChangeIsShort }) {
  const handleChange = () => {
    handleChangeIsShort(!isShortFilm);
    setIsShortFilm(!isShortFilm);
  }

  return (
    <div className="filter-checkbox">
        <input 
          name="filterCheckbox"
          id="filter-checkbox"
          type="checkbox"
          className="filter-checkbox__switch"
          onChange={handleChange}
          checked={isShortFilm}
        />
        <label className="filter-checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;