import React from "react";
import { NavLink } from 'react-router-dom';

import "./Form.css";
import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      phone: ""
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePhoneChange = event => {
    this.setState({
      phone: event.target.value
    });
  };

  render() {
    return (
      <form className="input-form">
        <div className="input">
          <label>Name: </label>
          <input
            type="text"
            className="text-input"
            placeholder='Type here'
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div className="input">
          <label>Email: </label>
          <input
            type="email"
            className="text-input"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="input">
          <label>Phone number: </label>
          <input
            type="number"
            className="text-input"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
        </div>
        <div className="input">
          <label>Choose time and date: </label>
          <input type="date" className="text-input" />
        </div>

        <NavLink to='' className='book-btn'>Book Now</NavLink>
      </form>
    );
  }
}

export default Form;
