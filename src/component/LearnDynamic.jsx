import React from 'react'
import { useParams } from 'react-router-dom'

function LearnDynamic() {
    let params=useParams()
    console.log(params)
  return (
    <div>
      dynamic
    </div>
  )
}

export default LearnDynamic
