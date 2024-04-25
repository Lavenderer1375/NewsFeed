import { useQuery } from "react-query";
import axios from "axios";

const TheGuardian = ({ searchProps, filterProps, paginationProps }) => {
  const { query, tags } = searchProps;
  const { fromDate, pageSize } = filterProps;
  const { pageNumber } = paginationProps;
  // Function to handle GET req, using 'axios' and 'react query':
  const fetchData = async () => {
    const baseURL = "https://content.guardianapis.com/search";
    const apiKey = "cd7d44a5-b210-4010-9256-9478d6993cab";
    const URL = `${baseURL}?q=${query}&page=${pageNumber}&pageSize=${pageSize}?tag=${tags}?from-date=${fromDate}&api-key=${apiKey}`;

    const response = await axios.get(URL);
    const data = response.data;

    return data.response.results;
  };

  // 'react query' function:
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery(
    ["news", query, fromDate, pageSize, pageNumber, tags],
    fetchData
  );

  // Loading and error messages:
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  // UI
  return (
    <div>
      {/* mapping news for setting the data */}
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
    </div>
  );
};

// TheGuardian.propTypes = {
//   query: PropTypes.string.isRequired,
//   fromDate: PropTypes.function.isRequired,
//   page: PropTypes.number.isRequired,
//   tags: PropTypes.function.isRequired,
//   pageNumber: PropTypes.number.isRequired,
// };

export default TheGuardian;
