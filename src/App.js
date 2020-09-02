import React, {useState} from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from './Details'
import ThemeContext from './ThemeContext'

const App = () => {
  const themeHook = useState("black")
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
        <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
