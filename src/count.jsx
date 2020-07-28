import React, { Component } from "react";

class count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0,
      amount: "",
      noteDetails: [],
      totalNote: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //this.setState({ noteDetails: this.state.totalCount});
    this.state.noteDetails.length = 0;
    const note = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var amount = Number(this.state.amount);
    //logic for count note
    for (var i = 0; i < note.length; i++) {
      if (amount >= Number(note[i])) {
        console.log(
          `Number of ${note[i]} :` + parseInt(amount / Number(note[i]))
        );
        this.state.noteDetails.push(
          `Number of ${note[i]} :` + parseInt(amount / Number(note[i]))
        );
        amount = amount % Number(note[i]);
      }
    }

    this.setState({
      totalCount: this.state.noteDetails.length
    })
  }

  render() {
    const items = this.state.noteDetails.map((item) => { return <li>{item}</li>; }
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>My count page</h3>
          <label>Enter your amount</label>
          <input
            type="text"
            name="amount"
            onChange={this.handleChange}
            value={this.state.amount}
          ></input>
          <input type="submit" name="Submit"></input>
          <label>Result: {this.state.totalCount}</label>

          <ul>{items}</ul>
        </form>
      </div>
    );
  }
}

export default count;
