import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({currentSubject}) => {
  const newsCards = currentSubject.map(news => {
    
    return (
      <NewsArticle
        image={news.img}
        headline={news.headline}
        description={news.description}
        url={news.url}
      />
    )
    
  })
      return (
        <div className="news-container">
          {newsCards}
        </div>
      )
}

export default NewsContainer;