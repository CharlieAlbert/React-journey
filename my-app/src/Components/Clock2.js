import React from 'react'

function Clock2() {
    setTimeout(new Date(), 1000);
  return (
    <div>
        <h2>Allow me to show you the time</h2>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
}


export default Clock2