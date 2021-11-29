import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = (props) => {
  return(
    <Button href={props.href} target="_blank" 
            variant={props.variant} size={props.size} className={props.className} style={props.style}>
      <img src={props.img.src} style={props.img.style} alt={props.img.alt}/> {props.text}
    </Button>
  );
}

export default ButtonComponent;