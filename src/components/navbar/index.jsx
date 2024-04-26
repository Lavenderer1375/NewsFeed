const Navbar = ({
  searchProps,
  paginationProps,
  filterProps,
  activeTab,
  onTabClick,
}) => {
  const { query, setQuery, sources, setSources, tags, setTags } = searchProps;
  const { pageNumber, handlePageChange } = paginationProps;
  const { fromDate, setFromDate, pageSize, setPageSize } = filterProps;
  return (
    <nav className="bg-blue-400 p-4 gap-2 flex flex-col sm:flex-row items-center justify-between">
      <h1 className="text-white text-3xl font-bold mb-4 sm:mb-0 sm:mr-4">
        Latest News
      </h1>
      <div className="flex sm:items-center">
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <label className="text-white text-xl">Search:</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-md p-2"
          />
        </div>
        <div className="flex space-x-3 bg-blue-300 text-black rounded-lg p-2 mx-2">
          <button
            className={`text-white ${
              activeTab === "NewsFeed" &&
              "underline bg-blue-600 rounded-md p-1 ease-in-out duration-200"
            }`}
            onClick={() => onTabClick("NewsFeed")}
          >
            News Feed
          </button>
          <button
            className={`text-white ${
              activeTab === "TheGuardian" &&
              "underline bg-blue-600 rounded-md p-1 ease-in-out duration-200"
            }`}
            onClick={() => onTabClick("TheGuardian")}
          >
            The Guardian
          </button>
          {/* Add more buttons for other tabs as needed */}
        </div>
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <label className="text-white text-xl m-auto">Source:</label>
          <input
            type="text"
            value={sources}
            onChange={(e) => setSources(e.target.value)}
            className="rounded-md p-2"
          />
        </div>
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <label className="text-white text-xl m-auto">Tags:</label>
          <select
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="rounded-md p-2"
          >
            <option value="lifeandstyle/live-better">
              lifeandstyle/live-better
            </option>
            <option value="lifeandstyle/lifeandstyle">
              lifeandstyle/lifeandstyle
            </option>
            <option value="environment/environment">
              environment/environment
            </option>
            <option value="environment/ethical-living">
              environment/ethical-living
            </option>
            <option value="environment/recycling">environment/recycling</option>
            <option value="environment/energyefficiency">
              environment/energyefficiency
            </option>
            <option value="environment/energy">environment/energy</option>
            <option value="environment/waste">environment/waste</option>
          </select>
        </div>
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <label className="text-white text-xl m-auto">From Date:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="rounded-md p-2"
          />
        </div>
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <label className="text-white text-sm m-auto">Page Size:</label>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
            className="rounded-md p-2"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div>
          <button
            disabled={pageNumber === 1}
            onClick={() => handlePageChange(pageNumber - 1)}
            className="bg-white text-blue-500 rounded-md py-2 px-4 mr-2 disabled:opacity-50 hover:bg-blue-800 hover:text-white"
          >
            Prev
          </button>
          <p className="text-white mb-4 sm:mb-0">Page: {pageNumber}</p>
          <button
            onClick={() => handlePageChange(pageNumber + 1)}
            className="bg-white text-blue-500 rounded-md py-2 px-4 hover:bg-blue-800 hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
