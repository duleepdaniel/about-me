import React from "react"
import { Navbar, Container } from "react-bootstrap";
import logo from '../logo.svg'

const NavBar = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container className='logo-container'>
                    <Navbar.Brand href="/">
                        <img alt='react-logo' src='startup.png' className='logo' title="App-logo" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavBar;