import React, { Component } from "react";

import UserService from "../../services/user.service";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };

    this.getBoard = this.getBoard.bind(this)
  }

  getBoard = () => {}

  componentDidMount() {
    this.getBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}

export class UserBoard extends Board {
  getBoard = UserService.getUserBoard;
}

export class AdminBoard extends Board {
  getBoard = UserService.getAdminBoard
}

export class ModeratorBoard extends Board {
  getBoard = UserService.getModeratorBoard
}