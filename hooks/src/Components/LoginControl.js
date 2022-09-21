import React, { Component } from 'react'
import UserGreeting from './UserGreeting'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

class LoginControl extends Component {

    constructor(props) {
      super(props)

        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handelLogoutClick.bind(this)
        this.state = {
            isLoggedIn: false
      }
      
    }

        handleLoginClick() {
        this.setState({isLoggedIn: true});
        }

        handleLogoutClick() {
        this.setState({isLoggedIn: false});
        }

   

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button;

    if (this.state.isLoggedIn) {
        return (
            button = <LogoutButton onClick={this.handleLogoutClick} />
        )
        
        
    }
    else {
        button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <>
        <UserGreeting />
        {button}
      </>
    )
  }
}


export default LoginControl