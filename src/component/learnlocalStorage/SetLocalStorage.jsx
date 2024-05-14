import React from 'react'
//local storage  is a memory for a particular domain for particular browser
//all data in localStorage are string
//data will persist in localStorage though browser is closed
const SetLocalStorage = () => {
    localStorage.setItem("name","saumya")
    localStorage.setItem("age","21")
    localStorage.setItem("isMarried","false")
  return (
    <div>
      SetLocalStorage

    </div>
  )
}

export default SetLocalStorage
