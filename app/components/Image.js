import React from 'react';

const Image = ({ src, sideEffect }) => (
  <div className='image'>
  { sideEffect && <p>OMG! A side effect just happend</p> }
  <img src={src}></img>
  </div>
)

export default Image;