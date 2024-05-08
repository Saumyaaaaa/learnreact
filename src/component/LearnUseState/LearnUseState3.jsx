import { useState } from "react";

const LearnUseState3 = () => {
  let [type, setType] = useState("password");
  return (
    <div>
      <input type={type} />
    

      {/* <button
        onClick={() => {
          setType(true);
        }}
      >
        Show password
      </button>
      <button
        onClick={() => {
          setType("password");
        }}
      >
        Hide password
      </button> */}
     
      <button
        onClick={() => {
          // if (type === "password") {
          //   setType("text");
          // } else {
          //   setType("password");
            
          // }

          type==="password"?setType("text") : setType("password");
        }}
      >
        {type === "password" ? "Show":"Hide"}
      </button>
    </div>
  );
};

export default LearnUseState3;
