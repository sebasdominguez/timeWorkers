import React from 'react';
import { ImageReloj ,H1Tiempo, CronElement, ImgH, Timer, Cont, Paused } from './style';
import clock from '../../images/alarm_clock_check.svg';

export default ({ time, lunch }) => {
 return (
 	<Cont>	
	 	<Timer>
		 	<ImgH src={clock}/>
			<H1Tiempo statusLunch={lunch}>
			  <CronElement>{time.h >= 10 ? time.h : '0' + time.h}</CronElement> : 
			  <CronElement>{time.m >= 10 ? time.m : '0' + time.m}</CronElement> : 
			  <CronElement>{time.s >= 10 ? time.s : '0' + time.s}</CronElement>
			</H1Tiempo>
		</Timer>
		{lunch === true ? 
	     <Paused>PAUSED</Paused> 
	     : null
	    }
    </Cont>	
  )
};