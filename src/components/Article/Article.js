import React from "react";

import placeholder from "../../assets/news-placeholder.png";

import "./Article.css";

function Article({ idx, article }) {
  const { urlToImage, title, source, description, url } = article;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="article-container">
      <div key={idx}>
        <img
          src={urlToImage ? urlToImage : placeholder}
          alt={title}
          className="article-img"></img>
        <h3>{title.split("-")[0]}</h3>
        <h4>{source ? source.name : ""}</h4>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default Article;
