import React, { useState, useEffect } from "react";

import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import requests from "./helpers/requests";

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getNews = async () => {
    const news = await fetch(requests.topHeadlinesUS)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.articles;
      })
      .catch((error) => {
        console.log(error);
      });

    return news;
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchNews = async () => {
        const news = await getNews();
        setNews(news);
      };
      fetchNews();
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  console.log("news", news);

  return (
    <>
      <Header />
      {error ? <p>{error}</p> : <Feed news={news} isLoading={isLoading} />}
      <Footer />
    </>
  );
}

export default App;
