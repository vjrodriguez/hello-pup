import React, {useState} from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from './Details'
import ThemeContext from './ThemeContext'
import NavBar from "./NavBar";


const App = () => {
  const themeHook = useState("28334AFF")
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        {/* <Link to="/">Adopt Me!</Link> */}
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
