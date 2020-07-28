import React, { Component } from "react";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const fields = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({
        fields
    })
  }

  handleSubmit(e){
      e.preventDefault();
      this.props.history.push('/count');
  }

  render() {
    return (
      <div>
        <h2>Login details</h2>
        <form onSubmit={this.handleSubmit}>
        <label>UserName: </label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          >
          </input>
          <br />
          <label>Password: </label>
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          >
          </input>
          <input type="submit" name="Submit"></input>
        </form>
      </div>
    );
  }
}

export default login;
