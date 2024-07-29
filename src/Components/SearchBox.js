import React from "react";
import tachyons from "tachyons";

const SearchBox = ({ classfield, searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
