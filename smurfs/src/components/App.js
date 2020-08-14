import React, { Component } from "react";
import SmurfList from "./SmurfList";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Smurf Village!</h1>
        <SmurfList />
      </div>
    );
  }
}

export default App;