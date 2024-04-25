import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const MyNavbar = ({ searchProps, paginationProps, filterProps }) => {
  const { query, setQuery, sources, setSources, tags, setTags } = searchProps;
  const { pageNumber, handlePageChange } = paginationProps;
  const { fromDate, setFromDate, pageSize, setPageSize } = filterProps;
  return (
    <Navbar expand="lg" bg="primary">
      <Container>
        <Navbar.Brand color="white">Latest News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="me-auto">
            <label className="form-label text-white">Search:</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="me-auto">
            <label className="form-label text-white">Source:</label>
            <input
              type="text"
              value={sources}
              onChange={(e) => setSources(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="me-auto">
            <label className="form-label text-white">Tags:</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="me-auto">
            <label className="form-label text-white">From Date:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="me-auto">
            <label className="form-label text-white">Page Size:</label>
            <Form.Select
              value={pageSize}
              onChange={(e) => setPageSize(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Form.Select>
            {/* <label className="form-label text-white">Page Size:</label>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(e.target.value)}
              className="form-select"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> */}
          </div>
          <div className="me-auto">
            <Button
              variant="primary"
              disabled={pageNumber === 1}
              onClick={() => handlePageChange(pageNumber - 1)}
              className="btn btn-light me-2"
            >
              Prev
            </Button>
            <p className="text-white">Page: {pageNumber}</p>
            <Button
              variant="success"
              onClick={() => handlePageChange(pageNumber + 1)}
              className="btn btn-light ms-2"
            >
              Next
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
