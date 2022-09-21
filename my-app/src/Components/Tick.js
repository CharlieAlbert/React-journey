import React, { Component } from 'react'

class Tick extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        message: 'Click and leave'
      }
    }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }

  render() {
    return (
      <div>
        This is from a class
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}



export default Tick