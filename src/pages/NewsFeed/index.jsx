import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const NewsFeed = ({ searchProps, filterProps, paginationProps }) => {
  const { query, sources } = searchProps;
  const { fromDate, pageSize } = filterProps;
  const { pageNumber } = paginationProps;
  // Local state to handle sorting news:
  const [sortBy, setSortBy] = useState("");

  // Function to handle GET req, using 'axios' and 'react query':
  const fetchData = async () => {
    const baseURL = "https://newsapi.org/v2/everything?";
    const apiKey = "378a32e61bf047429b8a3706a7cac064";
    const URL = `${baseURL}q=${query}&sources=${sources}&from=${fromDate}&sortBy=${sortBy}&apiKey=${apiKey}&pageSize=${pageSize}&page=${pageNumber}`;

    const response = await axios.get(URL);
    const data = response.data;

    const filteredArticles = data.articles.filter((article) =>
      Object.values(article).every(
        (value) =>
          value !== null &&
          value !== "[Removed]" &&
          value !== "https://removed.com"
      )
    );
    return filteredArticles;
  };

  // 'react query' function:
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery(
    ["news", query, fromDate, sortBy, pageSize, sources, pageNumber],
    fetchData
  );

  // Loading and error messages:
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  // Function to handle sorting news:
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // UI:
  return (
    <div>
      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="publishedAt">Published At</option>
          <option value="relevancy">Relevancy</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
      {/* mapping news for setting the data */}
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
    </div>
  );
};

export default NewsFeed;
