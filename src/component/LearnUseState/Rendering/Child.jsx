import React from 'react'
import GrandChild from './GrandChild'




const Child = ({count}) => {
    console.log("i am child")
  return (
    <div>
      <GrandChild count={count} />
    </div>
  );
}

export default Child
