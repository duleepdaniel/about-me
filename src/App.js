import React, { Component } from "react"
import "./App.css"
import Skills from "./components/Skills"
import Main from "./components/Main"
import Contact from "./components/Contact"
class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 800)
    }, 3000);
  }
  render() {
    return (
      <div>
        {/*<NavBar />*/}
        <Main />
        <Skills />
        <Contact />
      </div>
    )
  }
}

export default App
