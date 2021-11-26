import React from "react";
import Typed from 'react-typed';
import { Container, Row, Col, Button } from "react-bootstrap";
import './Main.css'
const Main = () => {
  return(
    <Container className='context'>
      <Row>
        <Col xs={12} lg={12}>
          <p className='context'>
            Hi! I am Duleep Panthagani a <br />
            <Typed
            strings={["Web Developer", "Software Engineer", "Gamer "]}
            typeSpeed={70}
            backSpeed={50}
            loop
            style={{color: "green"}}
            /> <br/>
            From INDIA. 
            <br /> 
            <br />
            <p className='sub_context'>You can find me on <br /> </p>
          </p>
          <Button href='https://github.com/duleepdaniel' target="_blank" variant="dark" size="lg" className='col-lg-2 col-12 mb-2'>
            <img src='github.png' style={{width: 30, alignItems: 'center'}} /> &nbsp; GitHub
          </Button>{' '}
          <Button href='https://in.linkedin.com/in/duleep-panthagani-a15b53158' target="_blank" 
            variant="outline-secondary" size="lg" className='col-lg-2 col-12 mb-2' style={{fontWeight: "bold"}}>
            <img src='Linkedin.png' style={{width: 30, alignItems: 'center'}} /> &nbsp; LinkedIN
          </Button>
          <br />
          <p className='sub_sub_context'>
            Hit me up if you want to talk about Coding or Video Games over Coffee, of course:)
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Main;