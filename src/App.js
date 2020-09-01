const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Little P",
        animal: "dog",
        breed: "Mixed"
      }),
      React.createElement(Pet, {
        name: "Bailey",
        animal: "dog",
        breed: "Mixed"
      }),
      React.createElement(Pet, {
        name: "Josie",
        animal: "dog",
        breed: "Mixed"
      })
    ]
  )
}
ReactDOM.render(
  React.createElement(App),
document.getElementById("root")
)
