import React, { Component } from 'react'

class NameForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value: ''
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.value)
        e.preventDefault()
    }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input value={this.state.value} onChange={this.handleChange} />
                <input type='submit' value='Submit' />
            </label>
        </form>
      </>
    )
  }
}

export default NameForm