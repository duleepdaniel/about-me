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
              background: { color: { value: "#080808"}},
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
                  value: "random",
                  random: true
                },
                links: {
                  color: 'random',
                  distance: 100,
                  enable: true,
                  opacity: 2,
                  width: 1.5,
                  triangles: {
                    enable: true,
                    opacity: 0.03
                  }
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: true,
                  speed: 4,
                  straight: false,
                },
                number: {
                  value: 100,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: ["circle","polygon","triangle"]
                },
                size: {
                  random: true,
                  value: 10,
                },
              },
              detectRetina: true,
            }}
          />
          <p className=' d-flex justify-content-center align-items-end polya-lg'>Hello!</p>
          <p className=' d-flex justify-content-center align-items-center polya-md'>I am Duleep Panthagani</p>
          <p className=' d-flex justify-content-center align-items-start polya'>
            A &nbsp; <Typed strings={["Web Developer", "Full Stack Dev", "Software Engineer", "Gamer"]}
              typeSpeed={100} backSpeed={50} loop style={{color: 'red'}} />
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Main;