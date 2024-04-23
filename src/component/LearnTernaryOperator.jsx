// import React from 'react'

//if age is greater than 18

const LearnTernaryOperator = () => {
  let age = 90;
//   let value = age > 18 ? "he can enter  a bar" : "he cannot enter a bar";
//   console.log(value);

//   let isMarried = false;
//   let marriage = isMarried === true ? "yes" : "no";
//   console.log(marriage);



// let v1= age<18?"he is underAge":age>=18&& age<60?"he is adult":"he is old"

// console.log(v1)


let gender="female"
let message=gender==="male"?"he is male":gender==="female"?"she is female":"other "
console.log(message)





  return <div>Learn ternary operator</div>;
};

export default LearnTernaryOperator;
