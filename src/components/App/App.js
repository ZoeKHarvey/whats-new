import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import entertainment from '../../data/entertainment';
import health from'../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      science,
      technology,
      currentSubject: local,
      searchedTopic: local
    }
   
  }

  selectSubject = (subject) => {
    this.setState({
      currentSubject: subject,
      searchedTopic: subject
      
    })
  }

  searchArticle = (input) => {
    const searched = input;
    this.setState({
      currentSubject: this.state.searchedTopic
        .filter(article => article.headline.includes(searched))
    })
  }
  

  render () {
    let currentSubject = this.state.currentSubject
    return (
      <main className="app">
        <h1>What's <span>New?</span></h1>
        <SearchForm searchArticle={this.searchArticle} />
        <Menu 
        selectSubject={this.selectSubject}
        categories={this.state}
        />
        <NewsContainer 
          currentSubject={currentSubject}/>
      </main>
    );
  }
}

export default App;
