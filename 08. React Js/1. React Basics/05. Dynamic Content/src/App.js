import React from 'react'

const App = () => {
  const myName = "Ayush";
  const mul = (a, b) => a * b;
  const specialClass = "simple-class"

  return (
    <>
      <h1>{myName}</h1>
      <h2>3 * 4 = {mul(3,4)}</h2>
      <p>2 + 2 = {2+2}</p>
      <p>My Friend List: {["abc", "pqr", "xyz"]}</p>
      <p className = {specialClass}>This is a special class</p>
    </>
  )
}

export default App
