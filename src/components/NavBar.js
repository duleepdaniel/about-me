import React from "react"
import { Navbar } from "react-bootstrap";
import './NavBar.css'

const NavBar = () => {
  return(
    <div>
      <Navbar variant="dark" fixed="top" className='gradient-custom'>
        <div className='logo-container'>
          <Navbar.Brand href="/">
            {/*<img alt='Nav-logo' src='startup.png' className='logo' />*/}
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}
export default NavBar;