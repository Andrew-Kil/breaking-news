import React from "react";

import Article from "../Article/Article";

import "./Feed.css";

function Feed({ news, isLoading }) {
  return (
    <div className="feed-container">
      {isLoading && <p>Loading...</p>}
      {news &&
        !isLoading &&
        news.map((article, idx) => {
          return <Article idx={idx} article={article} />;
        })}
    </div>
  );
}

export default Feed;
