import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const Cont = styled.div`
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10px;
margin-bottom: 10px;
`;

export const Timer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

export const ImageReloj = styled.img`
height: 24px;
width: auto;
@media ${device.tablet} {
  height: 20px;
}
`;

export const Paused = styled.div`
text-align: center;
font-family: Roboto;
font-size: 20px;
font-weight: bold;
color: #FF4343; 
margin-top: 7px;
`;

export const H1Tiempo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-family: Roboto;
font-size: 20px;
font-weight: bold;
padding: 15px;
border:${props => props.statusLunch === false ? '2px solid #1db779' : '2px solid #FF4343'};
border-radius: 3px;
@media ${device.tablet} {
  padding: 6px;
  font-size: 15px;
}
`;

export const CronElement = styled.div`
margin-left: 7px;
`;

export const ImgH = styled.img`
margin-right:5px;
height: 60px;
width: 60px;
@media ${device.tablet} {
  height: 40px;
  width: 40px;
}
`;