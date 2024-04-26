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
    <div className="container mx-auto px-4">
      <div className="grid gap-4">
        {/* Mapping news for setting the data */}
        {news.map((item, index) => (
          <div key={index} className="p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-2">{item.webTitle}</h1>
            <h2 className="text-lg mb-2">Section: {item.sectionName}</h2>
            <p className="text-base mb-2">Pillar Name: {item.pillarName}</p>
            <p className="text-base mb-2">Type of content: {item.type}</p>
            <a
              href={item.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read More
            </a>
            <p className="text-sm mt-2">
              Web publication date: {item.webPublicationDate}
            </p>
            <p className="text-base mt-2">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheGuardian;
