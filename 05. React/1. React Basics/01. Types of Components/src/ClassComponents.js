import { Component } from "react";
import FunctionalComponent from "./FunctionalComponent";

class ClassComponents extends Component {
  //to show content on the screen
  render() {
    return (
      <div>
        <h1>Hello Ayush From Class Component</h1>
        <FunctionalComponent />
      </div>
    );
  }
}

export default ClassComponents;
