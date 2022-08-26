import React from "react";
import { Container, Row , Col } from "react-bootstrap";
import ButtonComponent from "./Button";
import ScrollAnimation from 'react-animate-on-scroll';
import Map from "./Map";
const Contact = () => {
  return(
    <Container fluid style={{color: 'white', backgroundColor: '#040404'}} >
        <Row>
          <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center text-center'>
            <div>
            <ScrollAnimation animateIn="fadeInLeft">
              <p className='sub_context pb-2'>You can Find me on</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInDown" delay={200}>
              <ButtonComponent href='https://github.com/duleepdaniel' className='mb-2'
                variant='secondary' size='lg' style={{fontWeight: "bold"}} text='&nbsp;Github'
                img={{src: 'github.png', style: {width: 30, alignItems: 'center'}, alt: 'github'}} />{' '}
              <ButtonComponent href='https://in.linkedin.com/in/duleep-panthagani-a15b53158' className='mb-2'
                variant='primary active' size='lg' style={{fontWeight: "bold"}} text='&nbsp;&nbsp;LinkedIN'
                img={{src: 'Linkedin.png', style: {width: 30, alignItems: 'center'}, alt: 'linkedin'}}/>{' '}
              <ButtonComponent href='https://wa.me/+919110317308' className='mb-2'
                variant='success' size='lg' style={{fontWeight: "bold"}} text='&nbsp;WhatsApp'
                img={{src: 'whatsapp.png', alt: 'whatsapp', style: {width: 30, alignItems: 'center'}}} /> 
              <br />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={500}>
              <p className='sub_sub_context pt-2'>
                Hit me up if you want to talk about Coding or Video Games. Over Coffee, of course :)
              </p>
            </ScrollAnimation>
            </div>
          </Col>
          <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center text-center'>
            <Map />
          </Col>
        </Row>
    </Container>
  );
};

export default Contact;