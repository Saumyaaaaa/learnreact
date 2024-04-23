import React, { useState } from 'react'

const LearnUseState1 = () => {



     let [count, setCount] = useState(0);
     console.log("i am component")
  return (
    <div>
    <p>set is {count}</p>
   <button onClick={()=>{
    setCount(count + 1)
   }}>
    Increment
   </button>

   <button onClick={()=>{
        setCount(count-1)
   }}>
        Decrement
   </button>
   {/* component will render if state variable is changed */}
   <button onClick={()=>{
    setCount(0)//component will not render
   }}>
checked
   </button>
 
    </div>
  )
}

export default LearnUseState1
