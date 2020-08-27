import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Chronometer from './Chronometer';

const CronometroContainer = ({working, lunch}) => {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();

  if(localStorage.getItem('cronometro')) {
    let {s,m,h} = JSON.parse(localStorage.getItem('cronometro'))
    var updatedS = s, updatedM = m , updatedH = h;
  } else {var updatedS = time.s, updatedM = time.m , updatedH = time.h}

  useEffect(() => {
    if (working === true) start()
    else {
      setTime({ s: 0, m: 0, h: 0 })
      clearInterval(interv)
      localStorage.removeItem('cronometro')
    }
  }, [working]);

  useEffect(() => {
    if (lunch === true) clearInterval(interv)
      else if(lunch === false && working === true)start()
  }, [lunch]);

  useEffect(() => {
    return () => {
      clearInterval(interv)  // unMount
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cronometro', JSON.stringify(time)) // the Chron is thinked to persists
  }, [time]);

  const start = () => {
    if(localStorage.getItem('cronometro')) {
      let tiempoEnStorage = JSON.parse(localStorage.getItem('cronometro'))
      setTime(tiempoEnStorage)
      run(tiempoEnStorage);
      setInterv(setInterval(run, 1000));
    } else {
      run();
      setInterv(setInterval(run, 1000));
    }
  };

  const pause = () => {
    clearInterval(interv)
  }

  const run = (timer) => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    updatedS++;

    if(timer) {
      return setTime(timer)
    } else return setTime({ s: updatedS, m: updatedM, h: updatedH })

  };

  return (
    <Chronometer lunch={lunch} time={time}/>
  )
};


export default connect(null)(CronometroContainer);
