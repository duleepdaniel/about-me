import React, {useEffect} from 'react';

const TagCloud = require('TagCloud');
const container = '.tagcloud';
const texts = [ "Ruby", "HTML", "CSS", "JS", "AJAX", "Heroku", "React JS", "Rails" ];
const options = {
  radius: 200,
  initSpeed: 'normal'
};

const Spear = () => {
  useEffect(() => {
    TagCloud(container, texts, options);
  });
  return(
    <div className='d-flex justify-content-center'>
      <div className='tagcloud' style={{color: 'green', fontWeight: 'bold'}}></div>
    </div>
  )
};

export default Spear;