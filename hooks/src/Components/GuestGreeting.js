import React, { Component } from "react";

class GuestGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Charles</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default GuestGreeting;
