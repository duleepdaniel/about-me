import React from "react";
import Typed from 'react-typed';
import { Container, Row, Col } from "react-bootstrap";
import ButtonComponent from "./Button";
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
            typeSpeed={100}
            backSpeed={50}
            loop
            style={{color: '#009357'}}
            /> <br/>
            From INDIA. 
            <p className='sub_context mt-4 mb-3'>You can Find me on <br /></p>
          </p>
          <ButtonComponent href='https://github.com/duleepdaniel'
            variant='dark' size='lg' className='col-lg-2 col-8 mb-2' style={{fontWeight: "bold"}}
            img={{src: 'github.png', style: {width: 30, alignItems: 'center'}, alt: 'github'}} text='Github'/>{' '}
          <ButtonComponent href='https://in.linkedin.com/in/duleep-panthagani-a15b53158'
            variant='outline-secondary' size='lg' className='col-lg-2 col-8 mb-2' style={{fontWeight: "bold"}}
            img={{src: 'Linkedin.png', style: {width: 30, alignItems: 'center'}, alt: 'linkedin'}} text='LinkedIN'/>
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