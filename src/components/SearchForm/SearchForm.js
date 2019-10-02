import React, { Component } from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="search-form">
    <input type="text" placeholder="Search local news here."></input>
    <button className="button__search">Search Now</button>
    </div>
  )
}


export default SearchForm;