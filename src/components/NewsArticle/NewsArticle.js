import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ headline, image, description} ) => {
  return (
    <div className="news">
      <img src={image}/>
      <h3>{ headline }</h3>
      <p>{ description }</p>
      
    </div>
  )
}

export default NewsArticle;