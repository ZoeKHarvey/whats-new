import React from 'react';
import './NewsArticle.css';
import arrow from '../../images/right-arrow.svg';

const NewsArticle = ({ headline, image, description, url} ) => {
  console.log(url)

  return (
    <article className="news">
      <div className="article__img">
        <img src={image} />
      </div>
      <h3>{ headline }</h3>
      <p className="description__p">{ description }</p>
      <a className="footer__p" href={url}>Link To Article>
      <footer>
      
      <p className="footer__p">Link To Article</p>
      <img className="img__arrow" src={arrow}/>
      </footer>
      </a>
      
    </article>
  )
}

export default NewsArticle;