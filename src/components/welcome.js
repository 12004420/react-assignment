import React from 'react'

export default function Welcome(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.college}</h2>
    </div>
  )
}
