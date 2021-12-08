import React from "react";
import Spear from "./Spear";
import { Container, Row, Col } from "react-bootstrap";
import './Main.css'

const Skills = () => {
    return(
      <Container fluid className='pt-0 mt-0'style={{color: 'white', backgroundColor: '#0d0d0d'}}>
        <Row>
          <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center'>
            <p className='context'>
              Hello, <br />I am Duleep Panthagani a </p>
          </Col>
          <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center'>
            <Spear />
          </Col>
        </Row>
      </Container>
    )
};

export default Skills;