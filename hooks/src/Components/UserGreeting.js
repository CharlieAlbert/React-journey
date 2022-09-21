import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let message;

    if (this.state.isLoggedIn) {
      message = <div>Welcome Charles</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }

    return <div>{message}</div>;
  }
}

export default UserGreeting;
