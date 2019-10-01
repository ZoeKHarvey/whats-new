import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
// import SearchForm from './SearchForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
   

      
    }
    console.log(this.state)
  }

  render () {
    return (
      <div className="app">
        <h1>What's New?</h1>
        <NewsContainer name="me" />
        {/* <SearchForm news={ this.state.local} /> */}
      </div>
    );
  }
}

export default App;
