import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Search = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const handleFilter = (e) => {
    e.preventDefault();
    props.displayFilter();
    setSearchVal("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.searchByItem(searchVal);
        setSearchVal("");
      }}
    >
      <div
        className="form-group"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h4 className="search-header">Item Search</h4>
          <span style={{ color: "#758EA8" }}>{props.total} Items</span>
        </div>
        <div style={{ width: "35%" }}>
          <input
            className="form-control"
            type="text"
            placeholder="Search by Item #"
            value={searchVal}
            onChange={(event) => setSearchVal(event.target.value)}
            required
            style={{ width: "80%", margin: "10px", display: "inline" }}
          />
          <button>
            <FontAwesomeIcon style={{ color: "#2D80AE" }} icon="fa-search" />
          </button>
          <a
            onClick={handleFilter}
            style={{ padding: "5px", cursor: "pointer" }}
          >
            <FontAwesomeIcon style={{ color: "#2D80AE" }} icon="fa-bars" />
          </a>
        </div>
      </div>
      <hr style={{ color: "#2D80AE" }} />
    </form>
  );
};

export default Search;
