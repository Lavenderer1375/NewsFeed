import { useQuery } from "react-query";
import axios from "axios";

const NewYorkTimes = () => {
  // Function to handle GET req, using 'axios' and 'react query':
  const fetchData = async () => {
    const baseURL = `https://api.nytimes.com/svc/archive/v1/2024/1.json?api-key=1vAIh0RTVB2tW0wzMmXP96E79XRCHOgx`;
    const response = await axios.get(baseURL);
    const data = response.data;
    return data.response.docs;
  };

  // 'react query' function:
  const { data: news, isLoading, isError } = useQuery("news", fetchData);

  // Loading and error messages:
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  // UI
  return (
    <div>
      {/* mapping news for setting the data */}
      {news &&
        news.map((item, index) => (
          <div key={index}>
            <h1>{item.webTitle}</h1>
            <h2>{item.sectionName}</h2>
            <p>{item.pillarName}</p>
            <p>{item.type}</p>
            <a href={item.webUrl} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
            <p>Date of publication: {item.webPublicationDate}</p>
            <p>{item.content}</p>
          </div>
        ))}
    </div>
  );
};

export default NewYorkTimes;
