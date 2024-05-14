import React, { useContext } from 'react'
import { Context1 } from '../../../App';

const GreatGrandChild = ({count}) => {
  let context = useContext(Context1);
  console.log(context.name)

    console.log("i am GreatGrandChild")
  return (
    <div>
      count is {count}
    </div>
  )
}

export default GreatGrandChild

