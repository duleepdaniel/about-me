import React, {useEffect} from 'react';
const TagCloud = require('TagCloud');
const container = '.tagcloud';

const Spear = () => {
  const texts = [ "Ruby", "HTML", "CSS", "JS", "AJAX", "Heroku", "React JS", "Rails", "PostgreSQL", "MySQL", "SASS", "Rest", "GraphQL", "AWS", "Jquery" ];
  const style={
    color: '#08fdd8', fontWeight: 'bold', fontFamily: 'cursive'
  }
  const options = { 
    radius: 350, initSpeed: 'fast',
    maxSpeed: 'fast', direction: 145, 
    keep: true
  };
  useEffect(() => {
    if(window.innerWidth < 768){ options.radius = 150 }
    TagCloud(container, texts, options);
  });
  return(
    <div className='d-flex justify-content-center'>
      <div className='tagcloud' style={style}></div>
    </div>
  )
};

export default Spear;