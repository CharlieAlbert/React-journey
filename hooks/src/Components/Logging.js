import React, { Component } from 'react'

class Logging extends Component {

    handleClick = () => {
        console.log('this is: ', this)
    }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
            Click me
        </button>
      </>
    )
  }
}


export default Logging