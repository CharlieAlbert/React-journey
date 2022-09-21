import React, { Component } from "react";

class FlavorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Coconut",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    alert("You chose your favorite flavor as " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grape Fruit</option>
              <option value="Lime">Lime</option>
              <option value="Coconut">Coconut</option>
              <option value="Cinnamon">Cinnamon</option>
              <option value="Mixed fruit">Mixed Fruit</option>
              <option value="Beetroot">Beetroot</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default FlavorForm;
