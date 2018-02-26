import routerTypes from '../router/types'
import imgSmart from '../../styles/gude-smartphone.jpg';
import imgBacon1 from '../../styles/gude-bacon-1.jpg';
import imgBacon2 from '../../styles/gude-bacon-2.jpg';
import imgBacon3 from '../../styles/gude-bacon-3.png';

const imgsBacon = [imgBacon1, imgBacon2, imgBacon3];

const defaultState = {
  src: null,
}

const image = (state = defaultState, action) => {
  if (action != undefined) {
    const { type, payload } = action;
    switch (type){
      case (routerTypes.SMARTPHONE):
        return { src: imgSmart };
      case (routerTypes.BACON):
        return { src: imgsBacon[payload.id-1] } 
    }
  }
  return defaultState
}

export default image;
