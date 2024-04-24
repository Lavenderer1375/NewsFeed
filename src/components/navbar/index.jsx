import PropTypes from "prop-types";

const Navbar = ({ setActiveTab }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => setActiveTab("News API")}>News API</li>
        {/* <li onClick={() => setActiveTab("New York Times")}>New York Times</li>
        <li onClick={() => setActiveTab("The Guardian")}>The Guardian</li> */}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default Navbar;
