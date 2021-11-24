import React, { Component } from "react"
// import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img alt='Deadpool' className='Gif' src="hello.gif"></img>
          <p>Hi! I am Duleep Panthagani a Web Developer Working from India. You can find me on</p>
          <a href="https://github.com/duleepdaniel">GitHub</a> <br />
          <a href='https://in.linkedin.com/in/duleep-panthagani-a15b53158'> LinkedIn </a>
          <p> Hit me up if you want to talk about Coding, Coffee or video games :) </p>
        </header>
      </div>
    )
  }
}

export default App
