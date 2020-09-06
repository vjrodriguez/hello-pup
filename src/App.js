import React, {useState, lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import { Router } from "@reach/router";
import ThemeContext from './ThemeContext'
import NavBar from "./NavBar";

const Details = lazy(() => import("./Details"))
const SearchParams = lazy(() => import("./SearchParams"))

const App = () => {
  const themeHook = useState("28334AFF")
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        {/* <Link to="/">Adopt Me!</Link> */}
        <Suspense fallback={<h1>loading route...</h1>}>
          <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
