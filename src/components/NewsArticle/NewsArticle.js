import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ headline, image, description} ) => {
  return (
    <article className="news">
      <div className="article__img">
        <img src={image} />
      </div>
      <h3>{ headline }</h3>
      <p>{ description }</p>
      <button>Link To Article</button>
      
    </article>
  )
}

export default NewsArticle;