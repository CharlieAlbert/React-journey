import React, { Component } from 'react'

class EssayForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        value: 'Write an essay then submit it before tomorrow same time'
      };

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        alert('An essay was submitted: ' + this.state.value)
        e.preventDefault()
    }

    
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
            <label>
                Essay: 
                <textarea type='text' onChange={this.handleChange} />
                <input value='Submit' type='submit' />
            </label>
        </form>
      </>
    )
  }
}

export default EssayForm