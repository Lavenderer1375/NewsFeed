// import NewYorkTimes from "./pages/NewYorkTimes";
import { useState } from "react";
import MyNavbar from "./components/navbar";
import NewsFeed from "./pages/NewsFeed";
import TheGuardian from "./pages/TheGuardian";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";

const App = () => {
  // States passed through each component to handle URL change:
  const [query, setQuery] = useState("apple");
  const [fromDate, setFromDate] = useState("");
  const [sources, setSources] = useState("google-news");
  const [pageSize, setPageSize] = useState(10);
  const [tags, setTags] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  // Function to handle page change:
  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  // State to track the active tab
  const [activeTab, setActiveTab] = useState("TheGuardian");

  // Function to handle tab click
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MyNavbar
          activeTab={activeTab}
          onTabClick={handleTabClick}
          searchProps={{ query, setQuery, sources, setSources, tags, setTags }}
          paginationProps={{ pageNumber, setPageNumber, handlePageChange }}
          filterProps={{ fromDate, setFromDate, pageSize, setPageSize }}
        />
        {/* {activeTab === "NewYorkTimes" && <NewYorkTimes />} */}
        {activeTab === "NewsFeed" && (
          <NewsFeed
            searchProps={{ query, sources, tags }}
            filterProps={{ fromDate, pageSize, setPageSize }}
            paginationProps={{ pageNumber }}
          />
        )}
        {activeTab === "TheGuardian" && (
          <TheGuardian
            searchProps={{ query, tags }}
            filterProps={{ fromDate, pageSize, setPageSize }}
            paginationProps={{ pageNumber }}
          />
        )}
      </div>
    </QueryClientProvider>
  );
};

export default App;
