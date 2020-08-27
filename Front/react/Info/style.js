import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const List = styled.div`
  @media ${device.tablet} {
    padding-top: 15px;
    padding-bottom: 15px;
  }
margin-left: 5%;
margin-right: 5%;
display: flex;
margin-top: 30px;
width: 90%;
border-radius: 3px;
background-color: #ffffff;
`;

export const Img = styled.img`
  @media ${device.tablet} {
    height: 40px;
    width: 40px;
  }
margin-top: 3%;
margin-left: 5%;
height: 40px;
width: 40px;
background-color: #273947;
border-radius: 50px;
padding: 7px;
`;

export const Cont = styled.div`
display: flex;
flex-direction: column;
margin-left: 5%;
width: 80%;
padding-top: 10px;
padding-bottom: 10px;
`;

export const Dates = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-top: 10px;
margin-right: 10px;
`;

export const Welcome = styled.div`
  @media ${device.tablet} {
    margin-top: 20px;
}
margin-top: 100px;
font-family: Roboto;
font-size: 20px;
font-weight: bold;
`;

export const FirstDay = styled.div`
  @media ${device.tablet} {
    margin-top: 10px;
}
margin-top: 40px;
font-family: Roboto;
font-size: 18px;
`;

export const Registre = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-top: 10px;
margin-right: 10px;
margin-left: 10px;
`;

export const RegistreLunch = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-top: 10px;
margin-right: 10px;
margin-left: 10px;
`;

export const DivScroll = styled.div`
overflow: auto;
width: 100%;  
flex-direction: column;
padding-bottom: 20px;
align-items: center;
justify-content:center;
text-align: center;
`;

export const ImgH = styled.img`
@media ${device.tablet} {
  height: 40px;
  width: 40px;
}
margin-right:5px;
height: 60px;
width: 60px;
`;

export const Num = styled.div`
color: #939598;
font-family: Roboto;
font-size: 17px;
font-weight: bold;
color: #939598;
margin-right: 5px;
`;

export const Hour = styled.div`
  @media ${device.tablet} {
    width: 90%;
  }
width: 65%;
color: #273947;
font-family: Roboto;
font-size: 24px;
text-align: left;
`;

export const HourLunch = styled.div`
  @media ${device.tablet} {
    width: 90%;
  }
width: 65%;
color: #dc803d;
font-family: Roboto;
font-size: 18px;
text-align: left;
`;

export const Info = styled.div`
  @media ${device.tablet} {
    font-size: 20px;
  }
width: 60%;
color: #273947;
font-family: Roboto;
font-size: 23px;
display: flex;
align-items: center;
`;

export const InfoLunch = styled.div`
  @media ${device.tablet} {
    font-size: 20px;
  }
width: 60%;
color: #dc803d;
font-family: Roboto;
font-size: 18px;
display: flex;
align-items: center;
`; 