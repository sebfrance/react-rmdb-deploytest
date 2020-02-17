import React from "react";
import { Router } from "@reach/router";

import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
);

export default App;

//1. JSX is syntactic sugar for react.createElement
//2. JSX can self close <div />
//3. User defined components should start with a capital letter
//4. You can use JS expressions inside of JSX {5 + 5}
//5. You can nest components, just like HTML
//6. Nested content can be accessed in props.children
//7. class in JSX is className
