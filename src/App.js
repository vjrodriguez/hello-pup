import React, {lazy, Suspense} from "react";
import Pet from "./Pet";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import {Provider} from "react-redux"
import store from "./store"

const Details = lazy(() => import("./Details"))
const SearchParams = lazy(() => import("./SearchParams"))

const App = () => {
  const themeHook = useState("28334AFF")
  return (
    <React.StrictMode>
      <Provider store={store}>
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
      </Provider>
    </React.StrictMode>
  );
};

export default App
