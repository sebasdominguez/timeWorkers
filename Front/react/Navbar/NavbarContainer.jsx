import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/Login';
import Navbar from './Navbar';
import history from '../../utils/history';

const NavbarContainer = ({history, setLogout}) => {

	const exit = function () {	
		localStorage.removeItem('auth')
		localStorage.removeItem('cronometro')
	}

  return (
    <Navbar logOut={exit} />
  )
};

export default connect(null)(NavbarContainer);