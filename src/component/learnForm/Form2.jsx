import React, { useState } from "react";

const Form2 = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [address, setAddress] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form is submitted");
        }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder=" your name"
          />
        </div>
        <br />
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Form2;
