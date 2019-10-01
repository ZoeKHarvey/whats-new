import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({news}) => {
  const newsCards = news.map(news => {
    
    return (
      <NewsArticle
        image={news.img}
        headline={news.headline}
        description={news.description}
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