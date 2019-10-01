import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = (props) => {
  return (
    <div className="news-container">
      <NewsArticle />
      <NewsArticle />
      <NewsArticle />
    </div>
  )
}

export default NewsContainer;