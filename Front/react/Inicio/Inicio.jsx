import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import {
  Container,
  ActionToday,
  Statistics,
  WorkData,
  Oval,
  Indicadores,
  OvalInt,
  Worker,
  Action,
  InfoToday,
  Icos24,
  DivJ,
  Break,
  Icos24Hor,
  Label,
  Time,
  Logos,
  LogoStad,
  LogoUser,
  ContUser,
  SubTitle,
  Item,
  Percentage,
  Title,
  Line,
  ContNumRed,
  ContNumGreen,
  Paused,
  Today
} from './style';
import InfoContainer from '../Info/Loadable';
import down from '../../images/chevron_downWhite.svg';
import up from '../../images/chevron_upWhite.svg';
import clockWhite from '../../images/clockWhite.svg';
import user from '../../images/user_closed.svg';
import clockRed from '../../images/clock-red.svg';
import clockWorkedHours from '../../images/journey.svg';
import '../common/styles/main.scss';
import Chronometer from '../chronometre/Loadable.js';
import moment from 'moment';

export default ({handleClick, handleLunch, status, onLunch, arrive, expected, hrsWorked, worker}) => {
  let performance = Math.round((Number(hrsWorked.hr+'.'+hrsWorked.min)-expected)*10)/10;
  return (
  <Container>
    <Carousel
      className="sliderInicio"
      isRTL
      itemsToShow={1}
      transitionMs={500}
      showArrows={false}
      focusOnSelect
    >
      <ActionToday>
        <Oval onClick={handleClick} status={status}>
          <OvalInt status={status}>
            <Worker>
              <div> WORKER </div>
              <div> {worker} </div>
            </Worker>
            {status === false ?  //CHECK IF THE WORKER IS IN / OUT
            <Action status={status}>ARRIVE</Action>
            :
            <Action status={status}>EXIT</Action>
            }
          </OvalInt>
        </Oval>
        {status === true ?  //IF IS IN, CAN STOP TO BREAK
          ( onLunch === false ? 
            (<Break propLunch={onLunch} onClick={handleLunch}>
              <div>LUNCH TIME</div>
             </Break>
            )
            : 
            (<Break propLunch={onLunch} onClick={handleLunch}>
              <div>I´M BACK</div>
             </Break>
            )
          )
          : null
        }
        <Indicadores>
          <Icos24Hor>
          {arrive != '' ?
            <Label>TODAY ARRIVED HOUR</Label>
            :
            <Label>NOT ARRIVED YET</Label>
          }
            <Logos src={clockRed} alt="clock" />
            <Time>{arrive}</Time>
          </Icos24Hor>
        </Indicadores>
      </ActionToday>
      <Statistics>
        <SubTitle>MY STATISTICS</SubTitle>
        <ContUser>
          <LogoUser src={user} alt="user" />
        </ContUser>
        <Title>
          <Icos24>
            <Item>THIS WEEK</Item>
          </Icos24>
        </Title>
        <Line></Line>
        <Title>
          <Icos24>
            <Item>EXPECTED WORK HOURS : {expected}  </Item>
          </Icos24>
        </Title>
        <Title>
          <Icos24>     
            {! hrsWorked.hr  ?           
            <Item>0 HOURS WORKED</Item>
            :
            <Item>YOU WORKED {hrsWorked.hr}.{hrsWorked.min} HOURS</Item>
            }
            <Logos src={clockWorkedHours} alt="clock" />
          </Icos24>
        </Title>
        <Title>
          {! hrsWorked.hr  ? null :
          <Icos24>
            {performance < 0 ?
            <ContNumRed>
              <Percentage>{performance}hs</Percentage>
              <LogoStad src={down} alt="worked" />
            </ContNumRed>
            :
            <ContNumGreen>
              <Percentage>{performance}hs</Percentage>
              <LogoStad src={up} alt="worked" />
            </ContNumGreen>
          }
          </Icos24>
          }
        </Title>
      </Statistics>
    </Carousel>
    <hr></hr>
    <WorkData>
      <InfoToday>
        <Today> TODAY {moment().format('DD/MM/YYYY')}
        </Today>
        <Chronometer working={status} lunch={onLunch}/>
      </InfoToday>
      <InfoContainer/>
    </WorkData>
  </Container>
)};