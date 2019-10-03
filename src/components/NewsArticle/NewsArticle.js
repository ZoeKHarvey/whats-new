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
      <p>{ description }</p>
      <footer>
      <a className="footer__p" href={url}>Link To Article</a>
      {/* <p className="footer__p">Link To Article</p> */}
      <img className="img__arrow" src={arrow}/>
      </footer>
      
      
    </article>
  )
}

export default NewsArticle;