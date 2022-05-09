import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox() {

  return (
    <div className="filter-checkbox">
        <input 
        required
        name="filterCheckbox"
        id="filter-checkbox"
        type="checkbox"
        className="filter-checkbox__switch"/>
        <label className="filter-checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;