import React from "react";

function Search({searchText, setSearchText}) {
  const handleChange = (e) => {
    setSearchText(e.target.value);
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
