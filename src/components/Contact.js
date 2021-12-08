import React from "react";
import { Container, Row , Col } from "react-bootstrap";
import ButtonComponent from "./Button";

const Contact = () => {
  return(
    <Container>
      <Row>
        <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center'>
          <div>
            <p className='sub_context pb-2'>You can Find me on</p>
            <ButtonComponent href='https://github.com/duleepdaniel' className='mb-2 col-lg-4'
              variant='dark' size='lg' style={{fontWeight: "bold"}} text='&nbsp;Github'
              img={{src: 'github.png', style: {width: 30, alignItems: 'center'}, alt: 'github'}} />{' '}
            <ButtonComponent href='https://in.linkedin.com/in/duleep-panthagani-a15b53158' className='mb-2 col-lg-4'
              variant='outline-dark' size='lg' style={{fontWeight: "bold"}} text='&nbsp;LinkedIN'
              img={{src: 'Linkedin.png', style: {width: 30, alignItems: 'center'}, alt: 'linkedin'}}/>{' '}
            <ButtonComponent href='https://wa.me/+919110317308' className='mb-2 col-lg-4'
              variant='success' size='lg' style={{fontWeight: "bold"}} text='&nbsp;WhatsApp'
              img={{src: 'whatsapp.png', alt: 'whatsapp', style: {width: 30, alignItems: 'center'}}} /> 
            <br />
            <p className='sub_sub_context pt-2'>
              Hit me up if you want to talk about Coding or Video Games. Over Coffee, of course :)
            </p>
          </div>
          </Col>
      </Row>
    </Container>
  );
};

export default Contact;