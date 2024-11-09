# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 
 
 //------------------------CITY CONTROLLED INPUT------------------------------------------------\\

// src/App.jsx
import "./App.css";
import { useState } from "react";

const App = () => {
  // construct the cityInput state
  const [cityInput, setCityInput] = useState("");

  const handleChange = (event) => {
    //this function is in charge of updating the cityInput state.
    setCityInput(event.target.value);
  };

  //------------------------------------------------------------------------\\
  return (
    <>
      <label htmlFor="cityInput">City: </label>
      <input
        id="cityInput"
        name="cityInput"
        type="text"
        value={cityInput} // this binding ensures that the displayed value in the input field always matches the current state and is updated in real-time as the user types.
        onChange={handleChange} // when a user types or deletes a character in the input, the onChange event fires off.
      />
    </>
  );
};

export default App;

/*
- Make a simple input
1. Add state
2. Add an input value tied to state , value={cityInput};
3. Add a change handler function

You’ll always need some kind of state, some kind of user input element, and a handler function that sets state inside it.

*/