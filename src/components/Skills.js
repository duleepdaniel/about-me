import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import TagSphere from "./spear";
import './skills.css';

// css
import './Main.css'
const spearStyle={color: 'white', fontWeight: 'bold', fontFamily: 'cursive', foneSize: 'large'}

const Skills = () => {
    return(
      <Container fluid className='pt-0 mt-0 h-100'style={{color: 'white', backgroundColor: '#0B0A0B'}}>
        <Row>
          <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center'>
            <ScrollAnimation animateIn="fadeInLeft" duration={1}>
              <div className="justify-content-center">
                <div className="about-me">
                  <p>
                    About Me
                  </p>
                </div>
                <div className='this-is-me'>
                  <p>Hi, I'm Duleep, an Indian full-stack developer.</p>
                  <p>I enjoy working on complex projects and learning from them, whether it's with a team or on my own.</p>
                  <p>I love Ruby, JavaScript and Everything that is linked to Back End Developement, and right now I'm working as Full-stack Developer at <a href="https://www.hhaexchange.com/" rel="noreferrer" target="_blank">HHAeXchange</a>.</p>
                  <p>I'm always interested in a challenge, so be sure to reach out to me if you have one.</p>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center'>
            <ScrollAnimation animateIn="fadeInRight" duration={3}>
              <TagSphere style={spearStyle} keepRollingAfterMouseOut='false'/>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    )
};

export default Skills;
