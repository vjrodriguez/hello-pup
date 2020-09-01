import React from "react";
import ReactDOM from "react-dom"
import Pet from "./Pet"

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Little P",
      animal: "Dog",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Bailey",
      animal: "Dog",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Josie",
      animal: "D og",
      breed: "Mixed",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
