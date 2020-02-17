import React from "react";
import { Link } from "@reach/router";

import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from "../styles/StyledHeader";

// Learn how to create a styled basic styled component
// Learn how to handle pages in styled component
// Create a global style with styled components

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
    </div>
  </StyledHeader>
);

export default Header;
