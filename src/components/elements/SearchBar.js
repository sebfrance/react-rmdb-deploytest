import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";

import {
  StyledSearchBar,
  StyledSearchBarContent
} from "../styles/StyledSearchBar";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const doSearch = event => {
    const { value } = event.target;
    setState(value);

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 1000);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func
};

export default SearchBar;
