import React from "react";
import SearchIcon from "@mui/icons-material/Search";
function SearchBar() {
  return (
    <div className="searchBox">
      <input className="searchInput" type="text" name="" placeholder="Search" />
      <button className="searchButton" href="#">
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBar;
