const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  topHeadlinesUS: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
  topHeadlinesUSCategory: (category) =>
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`,
  topHeadlinesCountry: (country) =>
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`,
  everythingSearch: (search) =>
    `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`,
  everythingDomain: (domain) =>
    `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${API_KEY}`,
  everythingSortBy: (sortBy) =>
    `https://newsapi.org/v2/everything?sortBy=${sortBy}&apiKey=${API_KEY}`,
  // relevancy = articles more closely related to q come first.
  // popularity = articles from popular sources and publishers come first.
  // publishedAt = newest articles come first.
  // Default: publishedAt
  sources: `https://newsapi.org/v2/sources?apiKey=${API_KEY}`,
  // request parameters: category, language, country
};

export default requests;
