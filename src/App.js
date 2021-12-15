import React, { Component } from "react"
import Skills from "./components/Skills"
import Main from "./components/Main"
import Contact from "./components/Contact"
// CSS
import "./App.css"
import 'animate.css/animate.min.css';
class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Skills />
        <Contact />
      </div>
    )
  }
}

export default App
