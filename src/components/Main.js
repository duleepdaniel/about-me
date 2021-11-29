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
          <p className='hello'>ℌ𝔢𝔩𝔩𝔬!</p>
          <p className='context'>
            I am Duleep Panthagani a <br />
            <Typed
            strings={["Full Stack Developer", "Software Engineer", "Gamer"]}
            typeSpeed={90}
            backSpeed={50}
            loop
            style={{color: '#009357'}}
            /> <br/>
            From INDIA. 
            </p>
            <div className='fixed-bottom'>
              <p className='sub_context pb-2'>You can Find me on</p>
              <ButtonComponent href='https://github.com/duleepdaniel'
                variant='dark' size='lg' className='mb-2' style={{fontWeight: "bold"}}
                img={{src: 'github.png', style: {width: 30, alignItems: 'center'}, alt: 'github'}} />{' '}
              <ButtonComponent href='https://in.linkedin.com/in/duleep-panthagani-a15b53158'
                variant='outline-dark' size='lg' className='mb-2' style={{fontWeight: "bold"}}
                img={{src: 'Linkedin.png', style: {width: 30, alignItems: 'center'}, alt: 'linkedin'}}/>{' '}
              <ButtonComponent href='https://wa.me/+919110317308' variant='success' size='lg' className='mb-2' style={{fontWeight: "bold"}}
                img={{src: 'whatsapp.png', alt: 'whatsapp', style: {width: 30, alignItems: 'center'}}} /> 
              <br />
              <p className='sub_sub_context pt-2'>
                Hit me up if you want to talk about Coding or Video Games. Over Coffee, of course :)
              </p>
            </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Main;