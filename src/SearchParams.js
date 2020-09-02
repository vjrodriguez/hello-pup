import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown'
import Results from './Results'
import ThemeContext from './ThemeContext'

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS)
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds)
  const[pets, setPets] = useState([])
  const [theme, setTheme] = useContext(ThemeContext)

  async function requestPets(){
    const {animals} = await pet.animals({
      location,
      breed,
      type: animal
    })
    setPets(animals || [])
  }

  //renders first before useEffect runs, doesn't slow down the first render
  useEffect(() => {
    setBreeds([])
    setBreed("")

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({name}) => name)
      setBreeds(breedStrings)
    }, console.error)
  }, [animal, setBreed, setBreeds])
    //an array of dependencies, the function will run if any of these changes

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault()
        requestPets()
      }}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(evt) => setLocation(evt.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button style={ {backgroundColor: theme} }>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
