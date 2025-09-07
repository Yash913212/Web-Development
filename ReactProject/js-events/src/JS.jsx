import React, { useState } from "react";
import "./JS.css";

const RegistrationForm = () => {
  // State for inputs
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle submit
  const handleSubmit = () => {
    console.log("Form Submitted ✅");
    console.log(formData);
    alert(`Hello ${formData.firstname} ${formData.lastname}, your form is submitted!`);
  };

  return (
    <>
      <h1><i>Registration Form</i></h1>
      <div className="tags">
        <input
          type="text"
          name="firstname"
          placeholder="Enter your First name"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="lastname"
          placeholder="Enter your Last name"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />

        <input
          type="number"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />

        <button className="Btn" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default RegistrationForm;
