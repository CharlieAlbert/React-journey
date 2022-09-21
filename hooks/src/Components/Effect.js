import React, { useState, useEffect } from 'react'

function Effect() {
    const [resourceType, setResourceType] = useState('posts')
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItem(json))
    }, [resourceType])

  return (
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        <h1>{resourceType}</h1>
        {item.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
    </div>
    
  )
}


export default Effect