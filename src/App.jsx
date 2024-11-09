// src/App.jsx
import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState("The full name will appear right here!!!");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    console.log(firstName)
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    console.log(lastName)
  }

  //-----------------------------------------------------------------------------------------\\
  return (
    <>
      <h2>{title}</h2>
      <form>
        <label htmlFor="firstName">First name: </label>
        <input
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <br />
        <label htmlFor="lastName">Last name:</label>
        <input 
        id="lastName" 
        value={lastName}
        onChange={handleLastNameChange}
        />
      </form>
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

- cityInput(the state), is controlling the value of the input field. Every time the state changes, the input field updates to show the new value.
*/
