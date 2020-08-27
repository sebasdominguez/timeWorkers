import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { totalWorked } from '../../store/actions/Registry';
import Info from './Info';
import moment from 'moment';

const mapStateToProps = function (state) {
  return {
    lunch: state.inicio.lunch,
    workRegistry: state.workRegistry.registry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTotalWorked: (milisec, data)=> dispatch(totalWorked(milisec, data))
  };
};

const Views = ({lunch, workRegistry, setTotalWorked}) => {

  const [newRegistry, setNewRegistry] = useState([]);

  const msToTime = (duration) => {  //format de time
    let minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    return hours + ":" + minutes;
  }

  useEffect(() => {  //set the registry
  	let newArray = [];
  	let arrayTotalHours = []
  	if(workRegistry.length){
  	  workRegistry.map((element) => {
  	  let obj = new Object();
  	  obj.id = element.id
      obj.date = moment(element.entry).format('dddd, MMMM Do YYYY')
      obj.entry = moment(element.entry).format('h:mm:ss a')
      obj.out = moment(element.out).format('h:mm:ss a')
      if (element.lunchStart) obj.lunchStart = moment(element.lunchStart).format('h:mm:ss a')
      if (element.lunchEnd) obj.lunchEnd = moment(element.lunchEnd).format('h:mm:ss a')
      let diff = moment.duration(moment(element.out).diff(moment(element.entry)));
  	  let hours = diff._data.hours
  	  let minutes = diff._data.minutes
  	  let total = hours + ':' + minutes
  	  arrayTotalHours.push(parseInt(diff.asMilliseconds()))
      obj.totalWorked = total
      newArray.push(obj)
  	})}
  	if(arrayTotalHours.length){
      let totalHoursWorked =arrayTotalHours.reduce(function(a, b){return a + b});
      var d = moment.duration(totalHoursWorked, 'milliseconds');
      var hours = Math.floor(d.asHours());
      var mins = Math.floor(d.asMinutes()) - hours * 60;
      let totalHr = new Object();
      totalHr.hr=hours
      totalHr.min=mins
      setTotalWorked({milisec:totalHoursWorked}, totalHr)
    }
  	setNewRegistry(newArray)
  }, [workRegistry]);

  useEffect(() => {  //reset when component unmount
    return ()=> {
      setNewRegistry([])
      setTotalWorked(null,0)
    }    
  }, []);

  return  (
   <Info lunch={lunch} registry={newRegistry}/>
   )
}

export default connect(mapStateToProps, mapDispatchToProps)(Views);