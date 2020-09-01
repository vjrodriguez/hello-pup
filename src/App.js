const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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
