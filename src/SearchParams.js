import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import { connect } from "react-redux"
import changeLocation from "./actionCreators/changeLocation"
import changeTheme from "./actionCreators/changeTheme"

const SearchParams = ({ theme, location, setTheme, updateLocation}) => {
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []);
  }

  //renders first before useEffect runs, doesn't slow down the first render
  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);
  //an array of dependencies, the function will run if any of these changes

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(evt) => updateLocation(evt.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value={"darkslategray"}>Dark Slate Grey</option>
            <option value={"blue"}>Blue</option>
            <option value={"pink"}>Pink</option>
            <option value={"mediumorchid"}>Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets ={pets} />
    </div>
  );
};

const mapStateToProps = ({ theme, location}) => ({
  theme,
  location
})

const mapDispatchToProps = dispatch => ({
  setLocation(location) {
    dispatch(changeLocation(location))
  },
  setTheme(theme) {
    dispatch(changeTheme(theme))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams)
