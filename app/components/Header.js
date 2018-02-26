import React from 'react';
import { NavContainer } from '../containers';
import face from '../styles/gudetama-sad-face.png';

const wave = ({ key, className }) => (<svg key={key} className={className} viewBox="0 0 553 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
<path transform="rotate(180 489.18365478515625,9.997628211975098) " id="svg_1" d="m419.183672,20c21.5,-0.4 38.8,-2.5 51.1,-4.5c13.4,-2.2 26.5,-5.2 27.3,-5.4c15.6,-3.6 19.6,-5.4 30.1,-7.4c7.1,-1.3 17.9,-2.8 31.5,-2.7c0,0 0,0 0,0l0,20l-140,0z"/>
<path transform="rotate(180 350,9.997628211975098) " id="svg_2" d="m420,20c-21.5,-0.4 -38.8,-2.5 -51.1,-4.5c-13.4,-2.2 -26.5,-5.2 -27.3,-5.4c-15.6,-3.6 -19.6,-5.4 -30.1,-7.4c-7.2,-1.3 -17.9,-2.8 -31.5,-2.7c0,0 0,0 0,0l0,20l140,0z"/>
<path transform="rotate(180 210,9.997628211975098) " id="svg_3" d="m140,20c21.5,-0.4 38.8,-2.5 51.1,-4.5c13.4,-2.2 26.5,-5.2 27.3,-5.4c15.6,-3.6 19.6,-5.4 30.1,-7.4c7.1,-1.3 17.9,-2.8 31.5,-2.7c0,0 0,0 0,0l0,20l-140,0z"/>
<path transform="rotate(180 70.81632995605469,9.997628211975098) " id="svg_4" d="m140.816328,20c-21.5,-0.4 -38.8,-2.5 -51.1,-4.5c-13.4,-2.2 -26.5,-5.2 -27.3,-5.4c-15.6,-3.6 -19.6,-5.4 -30.1,-7.4c-7.2,-1.3 -17.9,-2.8 -31.5,-2.7c0,0 0,0 0,0l0,20l140,0z"/>
</svg>);

const waves = [];
const wavesRev = [];
for(var i = 0; i < 8; i++) {
  waves.push (wave({ key: `wave-${i}`, className: 'wave' }));
  wavesRev.push (wave({ key: `waveRev-${i}`, className: 'wave-rev' }));
}

const Header = (props) => (
  <header>
    
    <div className='stripe'>
      <img className='face' src={face} alt="-_-" />
    </div>
    <div className='wave-container'>
    {/* <div className='waves'> */}
    <div className='wave-sprites wave-sprites-rev'>
      { wavesRev }
    </div>
    <div className='wave-sprites'>
      { waves }
    </div>
    {/* </div> */}
    </div>
    <NavContainer></NavContainer>
  </header>
);

export default Header;
