import React, { useState } from 'react'

function countInitial() {
    console.log("Initial Count");
    return 4
}

function State() {

   const [count, setCount] = useState(() => countInitial())
   const [theme, setTheme] = useState('blue')

   function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('black')
   }

   function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
   }

  return (
    <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
    </div>
  )
}


export default State