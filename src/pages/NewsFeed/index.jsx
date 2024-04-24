import { useState, useEffect } from "react";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("Apple");
  const [fromDate, setFromDate] = useState("2024-03-24");
  const [sortBy, setSortBy] = useState("popularity");
  const [page, setPage] = useState(100);
  const [pageNumber, setPageNumber] = useState(1);

  const apiKey = "378a32e61bf047429b8a3706a7cac064";
  const baseURL = `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=${sortBy}&apiKey=${apiKey}&pageSize=${page}&page=${pageNumber}`;

  const fetchData = async () => {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      console.log(data.articles);
      const filteredArticles = data.articles.filter((article) =>
        Object.values(article).every(
          (value) =>
            value !== null &&
            value !== "[Removed]" &&
            value !== "https://removed.com"
        )
      );
      setNews(filteredArticles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [baseURL, query, fromDate, sortBy, page, pageNumber]);

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div>
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
      <div>
        <label>Page Size:</label>
        <select value={page} onChange={(e) => setPage(e.target.value)}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      {news.map((item, index) => (
        <div key={index}>
          <h1>{item.source.name}</h1>
          <h2>{item.author}</h2>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          <img alt="images" width={300} height={300} src={item.urlToImage} />
          <p>Date of publication:{item.publishedAt}</p>
          <p>{item.content}</p>
        </div>
      ))}
      <div>
        <button
          disabled={pageNumber === 1}
          onClick={() => handlePageChange(pageNumber - 1)}
        >
          Previous Page
        </button>
        <p>Page: {pageNumber}</p>
        <button onClick={() => handlePageChange(pageNumber + 1)}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default NewsFeed;
