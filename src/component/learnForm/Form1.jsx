import React from 'react'

const Form1 = () => {
  return (
    <div>
        {/* input type is mandatory */}
      <input type="text" />
      <br />
      <input type="password" />
      <br />
      <input type="number" />
      <br />
      <input type="checkbox" />
      <br />
      <input type="radio" />
      <br />
      <input type="email" />
      <br />
      {/* text area has not any type */}
      <textarea ></textarea>
      <br />
      <select>
        <option>Nepal</option>
        <option>India</option>
        <option>Usa</option>
      </select>
    </div>
  );
}

export default Form1
