import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [image,setShowImage]=useState(true)
  return (
    <div>
      {image === false ? <img src="vite.svg" alt="image" /> : null}
     
      <button
        onClick={() => {
          setShowImage(false);
        }}
      >
        show Image
      </button>
      <button
        onClick={() => {
          setShowImage(true);
        }}
      >
        Hide
      </button>
    </div>
  );
}

export default LearnUseState2
