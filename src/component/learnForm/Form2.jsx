import { useState } from "react";

const Form2 = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [address, setAddress] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [description, setDescription] = useState("");
  let [gender, setGender] = useState("female");
  let [country, setCountry] = useState("america");
  let [isMarried, setIsMarried] = useState(false);
  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  let countries = [
    { label: "Nepal", value: "nepal" },
    { label: "India", value: "india" },
    { label: "America", value: "america" },
    { label: "German", value: "german" },
    { label: "Uk", value: "ukd" },
  ];
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form is submitted");
          let data = {
            name: name,
            age: age,
            address: address,
            email: email,
            password: password,
            description: description,
            gender: gender,
            country: country,
            isMarried: isMarried,
          };
          console.log(data);
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
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        {/* <div>
          Gender &nbsp;
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
        </div> */}

        {/* <div>
          <label>Country</label>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="nepal">Nepal</option>
            <option value="china">China</option>
            <option value="india">India</option>
            <option value="america">America</option>
          </select>
        </div> */}

        <div>
          <label>Country:</label>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            {countries.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label>Gender:</label>
          {genders.map((item, i) => {
            return (
              //item= { label: "Male", value: "male" },
              <span key={i}>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  id={item.value}
                  type="radio"
                  checked={gender === item.value}
                  value={item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                ></input>
              </span>
            );
          })}
        </div>
        <br />

        <div>
          <label htmlFor="isMarried">IsMarried?</label>
          <input
            type="checkbox"
            id="isMarried"
            checked={isMarried === true}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Form2;
