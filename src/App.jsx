// src/App.jsx
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('The full name will appear right here!!!');
  const [firstName, setFirstName] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(`Your name is: ${formData.firstName} ${formData.lastName}`)
    setFormData({ firstName: '', lastName: ''})
    console.log('We no longer navigate away from this page');
  }

  //-----------------------------------------------------------------------------------------\\
  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name: </label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastName">Last name:</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <button type="submit">Submit your name here</button>
      </form>
    </>
  );
};

export default App;

