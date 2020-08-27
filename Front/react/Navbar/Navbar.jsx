import React from 'react';
import { ImgExit, NavCont, ImgLogo, Button } from './style';
import exit from '../../images/arrow_circle_left.svg';

export default ({logOut}) => {
  return (
    <NavCont>
      <a href='http://localhost:3000/api/users/logout'>
       <Button onClick={logOut}>
        <ImgExit src={exit} alt="exit"/> 
       </Button>
      </a>
	  <ImgLogo src="https://www.oowlish.com/wp-content/uploads/2017/10/header-logo-light.png" alt="oowlishWorker"/>
    </NavCont>
  )
};

