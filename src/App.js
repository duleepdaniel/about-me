import React, { Component } from "react"
import "./App.css"
//import NavBar from "./components/NavBar"
//import '../public/dark'
import Main from "./components/Main"
class App extends Component {
  render() {
    return (
      <div className="App-header">
        {/*<NavBar />*/}
        <Main />
      </div>
    )
  }
}

export default App
