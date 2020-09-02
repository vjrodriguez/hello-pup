import React from "react";
import ReactDOM from "react-dom"
import Pet from "./Pet"
import SearchParams from './SearchParams'

const App = () => {
  return (
    <React.StrictMode>
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Little P" animal="Dog" breed="Poodle Mix" />
      <Pet name="Bailey" animal="Dog" breed="Terrier Mix" />
      <Pet name="Joise" animal="Dog" breed="Pitbull Mix" /> */}
    </div>
    </React.StrictMode>
  )
  }

  ReactDOM.render(<App />, document.getElementById("root"))
