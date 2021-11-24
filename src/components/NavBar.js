import React from "react"
import { Navbar } from "react-bootstrap";

const NavBar = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <div className='logo-container'>
                    <Navbar.Brand href="/">
                        <img alt='react-logo' src='startup.png' className='logo' title="App-logo" />
                    </Navbar.Brand>
                </div>
            </Navbar>
        </div>
    );
}
export default NavBar;