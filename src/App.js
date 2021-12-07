import React, { Component } from "react"
import "./App.css"
//import NavBar from "./components/NavBar"
import Skills from "./components/Skills"
import Main from "./components/Main"
class App extends Component {
  render() {
    return (
      <div>
        {/*<NavBar />*/}
        <Main />
        <Skills />
      </div>
    )
  }
}

export default App
