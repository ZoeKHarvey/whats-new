import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import entertainment from '../../data/entertainment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      

   

      
    }
    console.log(this.state)
  }

  render () {
    return (
      <main className="app">
        <h1>What's <span>New?</span></h1>
        <SearchForm />
        <Menu />
        <NewsContainer news={this.state.local} />
      </main>
    );
  }
}

export default App;
