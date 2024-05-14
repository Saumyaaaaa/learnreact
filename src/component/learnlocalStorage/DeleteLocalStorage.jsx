import React from 'react'

const DeleteLocalStorage = () => {
    localStorage.removeItem("name")
    localStorage.removeItem("age")
    localStorage.removeItem("isMarried")
  return <div>DeleteLocalStorage</div>;
}

export default DeleteLocalStorage
