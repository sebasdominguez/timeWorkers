import React from 'react';
import { Link } from 'react-router-dom';
import { List, Num, Hour, Img, Cont, Dates, Registre, Info, DivScroll, Welcome, RegistreLunch, InfoLunch, HourLunch, FirstDay } from './style';
import image from '../../images/catalogue.svg';

export default ({ lunch, registry }) => {
  return (
      <DivScroll>
      { registry.length ?
        (
        registry.map((element) => {
          return (
          <List key={element.id}  >
            <Img src={image} />
            <Cont>
              <Dates>  
                  <Num>{element.date}</Num>
              </Dates>
              <Registre>  
                  <Info>ENTRY</Info>
                  <Hour>{element.entry}</Hour>
              </Registre>
              <Registre>  
                  <Info>OUT</Info>
                  <Hour>{element.out}</Hour>
              </Registre>
              <RegistreLunch>  
                  <InfoLunch>Lunch Time</InfoLunch>
                  <HourLunch>{element.lunchStart} - {element.lunchEnd}</HourLunch>
              </RegistreLunch>
            </Cont>
          </List>
            )
          }
        )
        ): <div>
            <Welcome>We are fetching yout data, please wait</Welcome>
            <FirstDay>If it is your first day, Congrats and Enter!</FirstDay>
           </div>
      }
      </DivScroll>
  );
};



