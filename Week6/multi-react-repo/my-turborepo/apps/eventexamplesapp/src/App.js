import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  sayHello = () => {
    console.log("Hello! This is a static message.");
    alert("Hello! This is a static message.");
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleClick = (e) => {
    alert("I was clicked");
    console.log("Synthetic event:", e);
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Event Examples App</h1>

        {/* Counter Section */}
        <p>Counter: {this.state.counter}</p>
        <button
          onClick={() => {
            this.increment();
            this.sayHello();
          }}
        >
          Increment
        </button>
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        {/* Say Welcome Button */}
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <hr />

        {/* Synthetic Event Example */}
        <button onClick={this.handleClick}>OnPress</button>

        <hr />

        {/* Currency Converter Component */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
