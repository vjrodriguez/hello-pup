import React, {useState} from 'react'

//custom hook
const useDropdown = (label, defaultState, options) => {
const [state, setState] = useState(defaultState)
const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`

const Dropdown = () => (
  <label htmlFor={id}>
    {label}
    <select if={id} value={state}
    onChange={evt => setState(evt.target.value)}
    onBlur={evt => setState(evt.target.value)}
    disabled={!options.length}
    >
      <option>All</option>
      {options.map(item => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  </label>
)
return [state, Dropdown, setState]
}

export default useDropdown
