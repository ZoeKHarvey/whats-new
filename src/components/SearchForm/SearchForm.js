import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super() 
    this.state = {
      search:''
    }
  }
  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
    this.props.searchArticle(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { search } = this.state;
    return(
    <div className="search-form">
    <input type="text" placeholder="Search local news here." value={ search } onChange={ (event) => this.handleChange(event) }></input>
    <button className="button__search">Search Now</button>
    </div>
    )}

}

export default SearchForm;
