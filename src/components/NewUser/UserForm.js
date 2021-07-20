import React, { useState } from "react";

import Modal from "../Modal/Modal";
import "./UserForm.css";
const UserForm = (props) => {
  const [enteredName, setEnterName] = useState("");
  const [enteredAge, setEnterAge] = useState("");
  const [error, setError] = useState();

  const nameHandler = (event) => {
    setEnterName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnterAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    setEnterName("");
    setEnterAge("");
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="card">
          <div className="new-user__controls">
            <div className="new-user__control">
              <label>Username</label>
              <input
                id="username"
                type="text"
                value={enteredName}
                onChange={nameHandler}
              />
            </div>
            <div className="new-user__control">
              <label>Age</label>
              <input
                id="age"
                type="number"
                value={enteredAge}
                onChange={ageHandler}
              />
            </div>
          </div>
          <div className="new-user__actions">
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
