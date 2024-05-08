import React, { useState } from "react";

const LearnUseState4 = () => {
  let [show, setShow] = useState(true);

  return (
    <div>
      {show === true && <img src="vite.svg"></img>}

      {/* <button
        onClick={() => {
          if (show === true) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
      >
        toggle
      </button> */}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show === true ? "hide Image" : "show image"}
      </button>
    </div>
  );
};

export default LearnUseState4;
