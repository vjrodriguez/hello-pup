import React from "react";
import ReactDOM from "react-dom"
import Pet from "./Pet"

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Little P" animal="Dog" breed="Poodle Mix" />
      <Pet name="Bailey" animal="Dog" breed="Terrier Mix" />
      <Pet name="Joise" animal="Dog" breed="Pitbull Mix" />
    </div>
  )
  }

  ReactDOM.render(<App />, document.getElementById("root"))
