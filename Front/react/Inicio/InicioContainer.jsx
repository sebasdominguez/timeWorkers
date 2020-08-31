import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { SetEntry, SetOut, SetLunch } from '../../store/actions/Inicio';
import { getRegistry  } from '../../store/actions/Registry.js';
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Loadable';
import Inicio from './Inicio';
import moment from 'moment';

const mapStateToProps = (state) => {
  return {
    lunch: state.inicio.lunch,
    auth: JSON.stringify(localStorage.getItem('auth')),
    hrsExpected: state.login.data.dataUser.expectedHours,
    hrsWorked: state.workRegistry.totalWorked,
    worker: state.login.data.dataUser.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDatosUser: () => dispatch(DatosUser()),
    setBooleano: (booleano) => dispatch(setBooleano(booleano)),
    entry: (booleano, obj) => dispatch(SetEntry(booleano, obj)),
    out: (booleano, obj) => dispatch(SetOut(booleano, obj)),
    changeLunch: (booleano, obj) => dispatch(SetLunch(booleano, obj)),
    fetchRegistry: ()=> dispatch(getRegistry()),
  };
};

const InicioContainer = ({setDatosUser, auth, setBooleano, hrsExpected, hrsWorked, entry, out, worker, fetchRegistry, changeLunch, lunch, workRegistry}) => {

  const [status, setStatus] = useState(false)  // status false --> worker is not working
  const [onLunch, setOnLunch] = useState(false)
  const [arrive, setArrive] = useState('')

  useEffect(() => {
    let setMoment = {}
    if(status===true){
      if (onLunch === true){
      setOnLunch(false)
      }
      setMoment = {entry: moment().format()}
      const arrival = moment().format('HH:mm')
      setArrive(arrival)
      entry(status, setMoment)
    } else {
      setMoment = {out: moment().format()}
      setArrive('')
      out(status, setMoment)
      fetchRegistry()
    }
  }, [status]);

  useEffect(() => {
    let setMoment = {};
    if (onLunch === true) { 
      setMoment = {lunchStart: moment().format()};
      changeLunch(onLunch, setMoment);
    } else {
      setMoment = {lunchEnd: moment().format()};
      changeLunch(onLunch, setMoment);
      }
  }, [onLunch]);

  useEffect(() => {
    return () => {  // unMount
      localStorage.removeItem('auth')
      setStatus(false)
      setOnLunch(false)
      setArrive('')
    }
  }, []);

  const handleClick = () => {
    if(onLunch)setOnLunch(false)
    setStatus(!status)  
  }

  const handleLunch = (boolean) => {
    setOnLunch(!onLunch)  
  }

  return (
  <>
    {auth === 'null' ? 
      (
      <Redirect to="/" />
      ) 
      : 
      (
      <>
        <Navbar/>
        <Inicio 
        handleClick={handleClick}
        handleLunch={handleLunch}
        onLunch={onLunch}
        status={status}
        arrive={arrive}
        expected={hrsExpected}
        hrsWorked={hrsWorked}
        worker={worker}
        />
      </>
      )
    }
  </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);
