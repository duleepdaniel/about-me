import React, { useEffect, useState } from "react";
import Spear from "./Spear";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

// css
import './Main.css'

const ProgressBar = ({ label, backgroundColor = "#e5e5e5", visualParts = [ { percentage: "100%", color: "white" } ]}) => {
  const [widths, setWidths] = useState( visualParts.map(() => { return 0; }));
  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map(item => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <>
      <div className="progressLabel">{label}</div>
      <div className="progressVisualFull" style={{ backgroundColor }}>
        {visualParts.map((item, index) => {
          return (
            <div key={index}
              style={{ width: widths[index], backgroundColor: item.color }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
    </>
  );
};

const Skills = () => {
    return(
      <Container fluid className='pt-0 mt-0 h-100'style={{color: 'white', backgroundColor: '#0d0d0d'}}>
        <Row>
          <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center'>
            <ScrollAnimation animateIn="fadeInLeft" duration={1}>
              <div>
                <p className='context'>I am a Web Developer based from INDIA</p><br />
                <p className='sub_context'>My Top Skills are</p>
                <ProgressBar label='HTML / CSS / JS' backgroundColor="white" 
                  visualParts={[ { percentage: "95%", color: "limegreen" } ]}
                />
                <ProgressBar label='Ruby / Rails' backgroundColor="white" 
                  visualParts={[ { percentage: "93%", color: "maroon" } ]}
                />
                <ProgressBar label='React JS' backgroundColor="white" 
                  visualParts={[ { percentage: "85%", color: "deepskyblue" } ]}
                />
                <ProgressBar label='MySQL / PostgreSQL ' backgroundColor="white" 
                  visualParts={[ { percentage: "75%", color: "DarkMagenta" } ]}
                />
              </div>
            </ScrollAnimation>
          </Col>
          <Col xs={12} lg={6} className='d-flex align-items-center justify-content-center'>
            <ScrollAnimation animateIn="fadeInRight" duration={1}>
              <Spear />
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    )
};

export default Skills;