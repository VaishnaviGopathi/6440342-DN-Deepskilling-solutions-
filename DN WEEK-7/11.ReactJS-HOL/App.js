import React from 'react';
import './App.css';
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <div className="App">
      <h1>React Event Handling Examples</h1>
      <EventExamples />
      <CurrencyConverter />
    </div>
  );
}

class EventExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // Method to increment counter
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello();
  };

  // Method to decrement counter
  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  // Static Hello Message
  sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  // Function with argument
  sayWelcome = (message) => {
    alert(`Welcome message: ${message}`);
  };

  // Synthetic event handler
  handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic event type:", event.type); // synthetic event
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>

        <hr />

        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>

        <hr />

        <button onClick={this.handleClick}>OnPress</button>
      </div>
    );
  }
}

export default App;
