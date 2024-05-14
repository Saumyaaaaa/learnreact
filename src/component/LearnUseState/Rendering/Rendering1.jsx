import React, { useState } from 'react'

//a component will render if state variable changes
//if state variable does not changes component will not render


const Rendering1 = () => {
    let[count,setCount]=useState(0)
    const handleClick=(e)=>{
        setCount(0)
    }
    console.log("i am rendering 1 component")
  return (
    <div>
      count is {count}
      <button onClick={()=>{
       {handleClick()}
      }}>Click me</button>
    </div>
  )
}

export default Rendering1
