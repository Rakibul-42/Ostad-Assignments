import React, { useRef, useState } from "react";
import Users from "./Users";

function ContactForm() {
  const [usersArr, setUsersArr] = useState([]);
  let fullName,
    email,
    number = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let fullNameValue = fullName.value;
    let emailValue = email.value;
    let numberValue = number.value;
    let formObj = {
      fullName: fullNameValue,
      email: emailValue,
      number: numberValue,
    };
    setUsersArr((prevState) => {
      return [...prevState, formObj];
    });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          ref={(a) => (fullName = a)}
          name="fullName"
          type="text"
          placeholder="Enter your name ."
        />
        <input
          ref={(b) => (email = b)}
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <input
          ref={(c) => (number = c)}
          type="number"
          name="number"
          placeholder="Your phone number"
        />
        <input type="submit" value="submit" />
      </form>
      {usersArr.length > 0 ? <Users usersArr={usersArr} /> : ""}
    </div>
  );
}

export default ContactForm;

