import { useState, useEffect } from "react";

const TheGuardian = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState();
  const [fromDate, setFromDate] = useState();
  const [page, setPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [tags, setTags] = useState();

  const baseURL = "https://content.guardianapis.com/search?";
  const apiKey = "cd7d44a5-b210-4010-9256-9478d6993cab";
  const URL = `${baseURL}q?=${query}&page=${pageNumber}&pageSize=${page}&tag?=${tags}&from-date?=${fromDate}&api-key=${apiKey}`;

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data.response.results);
      // const filteredArticles = data.articles.filter((res) =>
      //   Object.values(res).every(
      //     (value) => value !== 0 && value !== null && value !== undefined
      //   )
      // );
      setNews(data.response.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [URL, query, fromDate, page, pageNumber]);

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div>
      <h1>Latest News</h1>
      <div>
        <label>Search:</label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <label>tags:</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
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
          <h1>{item.webTitle}</h1>
          <h2>{item.sectionName}</h2>
          <p>{item.pillarName}</p>
          <p>{item.type}</p>
          <a href={item.webUrl} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          <p>Date of publication:{item.webPublicationDate}</p>
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

export default TheGuardian;
