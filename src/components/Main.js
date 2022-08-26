import React from "react";
import Particles from "react-tsparticles";
import { Container, Row, Col } from "react-bootstrap";
import './Main.css';
import Typed from 'react-typed';

const Main = () => {
  const particlesInit = (main) => {};
  const particlesLoaded = (container) => {};
  return(
    <Container fluid >
      <Row>
        <Col lg={12}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            height={'100vh'}
            options={{
              background: { color: { value: "#030203"}},
              fpsLimit: 200,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: 'grab'},
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 300,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: { quantity: 4,},
                  repulse: { distance: 200, duration: 0.4,},
                },
              },
              particles: {
                color: {
                  value: "#BBC4C2"
                },
                links: {
                  color: 'random',
                  distance: 100,
                  enable: true,
                  opacity: 1.5,
                  width: 1.5
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: true,
                  speed: 3,
                  straight: false,
                },
                number: {
                  value: 120,
                },
                opacity: {
                  value: 0.3,
                },
                shape: {
                  type: []
                },
                size: {
                  random: true,
                  value: 15,
                },
              },
              detectRetina: true,
            }}
          />
          <p className=' d-flex justify-content-center align-items-end font-lg'>Hello!</p>
          <p className=' d-flex justify-content-center align-items-center font-md'>I am Duleep Panthagani</p>
          <p className=' d-flex justify-content-center align-items-start font'>
            A &nbsp; <Typed strings={["Web Developer", "Full Stack Dev", "Software Engineer", "Gamer"]}
              typeSpeed={100} backSpeed={50} loop style={{color: '#990000'}} />
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Main;