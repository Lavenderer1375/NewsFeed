import { useState, useEffect } from "react";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("Apple");
  const [fromDate, setFromDate] = useState("2024-03-24");
  const [sortBy, setSortBy] = useState("popularity");

  const apiKey = "378a32e61bf047429b8a3706a7cac064";
  const baseURL = `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=${sortBy}&apiKey=${apiKey}`;

  const fetchNews = () => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
        const filteredArticles = data.articles.filter((article) =>
          Object.values(article).every(
            (value) =>
              value !== null &&
              value !== "[Removed]" &&
              value !== "https://removed.com"
          )
        );
        setNews({ ...data.articles, articles: filteredArticles });
      });
  };

  useEffect(() => {
    fetchNews();
  }, [query, fromDate, sortBy]);

  return (
    <div>
      <div className="App">
        <h1>Latest News</h1>
        <div>
          <label>Search Query:</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div>
          <label>From Date:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div>
          <label>Sort By:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="relevancy">Relevancy</option>
            <option value="publishedAt">Published At</option>
          </select>
        </div>
        {news &&
          news.map((item, index) => (
            <div key={index}>
              <h1>{item.source.name}</h1>
              <h2>{item.author}</h2>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <link href={item.url} />
              {/* <a>{item.url}</a> */}
              <img
                alt="images"
                width={100}
                height={100}
                src={item.urlToImage}
              />
              <p>{item.publishedAt}</p>
              <p>{item.content}</p>
              {/* Add other relevant fields here */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsFeed;

// {
//   news.map((item, index) => (
//     <div key={index}>
//       <h1>{item.source.name}</h1>
//       <h2>{item.author}</h2>
//       <p>{item.title}</p>
//       <p>{item.description}</p>
//       <link href={item.url} />
//       {/* <a>{item.url}</a> */}
//       <img alt="images" width={100} height={100} src={item.urlToImage} />
//       <p>{item.publishedAt}</p>
//       <p>{item.content}</p>
//       {/* Add other relevant fields here */}
//     </div>
//   ));
// }
