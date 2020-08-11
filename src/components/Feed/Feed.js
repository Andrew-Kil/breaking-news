import React from "react";

import placeholder from "../../assets/news-placeholder.png";

import "./Feed.css";

function Feed({ news, isLoading }) {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {news &&
        !isLoading &&
        news.map((article, idx) => {
          const {
            urlToImage,
            title,
            source,
            description,
            content,
            publishedAt,
            url,
          } = article;
          return (
            <div key={idx}>
              <img
                src={urlToImage ? urlToImage : placeholder}
                alt={title}
                className="article-img"></img>
              <h3>{title.split("-")[0].slice(0, -1)}</h3>
              <h6>{source ? source.name : ""}</h6>
              <p>{description}</p>
              <p>{content}</p>
              <p>Published: {new Date(publishedAt).toDateString()}</p>
              <a href={url}>{url}</a>
            </div>
          );
        })}
    </>
  );
}

export default Feed;
