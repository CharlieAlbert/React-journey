import React from 'react'
import GuestGreeting from './GuestGreeting'
import UserGreeting from './UserGreeting'

function Conditional(props) {

    const isLoggedIn = props.isLoggedIn

    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />

  return (
    <>
        
    </>
  )
}


export default Conditional