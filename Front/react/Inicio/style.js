import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const Container = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  } 
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 95vh;
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const Logos = styled.img`
  width: 35px;
  height: 35px;
`;

export const LogoStad = styled.img`
  width: 20px;
  height: 20px;
`;

export const ContUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-left: 45px;
  margin-right: 45px;
  margin-top: 65px;
  @media ${device.tablet} {
    margin-bottom: 15px;
    margin-top: 25px;
  }
`;

export const ContNumRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #FF4343;
  padding-top:5px;
  padding-bottom:5px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ContNumGreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #74C655;
  padding-top:5px;
  padding-bottom:5px;
  padding-left:10px;
  padding-right:10px;
`;

export const LogoUser = styled.img`
  margin-top: 15px;
  margin-bottom: 35px;
  height: 200px;
  width: 200px;
  background-color: #273947;
  border-radius: 50%;
  padding: 25px;
  @media ${device.tablet} {
    width: 100px;
    height: 100px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
`
export const ActionToday = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Statistics = styled.div`
  height: 90vh;
`;

export const Oval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border:${props => props.status === false ? '2px solid #1CB779' : '2px solid #FF4343'};
  margin-left: 45px;
  margin-right: 45px;
  border-radius: 50%;
  cursor: pointer;
  @media ${device.tablet} {
    margin-top: 50px;
    margin-bottom: 10px;
    width: 230px;
    height: 230px;
  }
  @media ${device.laptop} {
    margin-top: 70px;
    margin-bottom: 20px;
    width: 300px;
    height: 300px;
  }
`;

export const OvalInt = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border:${props => props.status === false ? '2px solid #1CB779' : '2px solid #FF4343'};
  border-radius: 50%;
  border-style: solid double;
  color: #d0d3e3;
  @media ${device.tablet} {
    width: 200px;
    height: 200px;
    &:hover {
      width: 210px;
      height: 210px;
    }
  }
  @media ${device.laptop} {
    width: 270px;
    height: 270px;
    &:hover {
      width: 280px;
      height: 280px;
    }
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #273947;
  color: #d0d3e3;
  margin:0px;
  width: 90%;
  margin-left:auto;
  margin-right:auto;
`;

export const Today = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Worker = styled.div`
  display:flex;
  flex-direction: column;
  color: #d0d3e3;
  font-family: Roboto;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const Action = styled.div`
  height: 75px;
  color:${props => props.status === false ? '#1CB779' : '#FF4343'};
  font-family: Roboto;
  line-height: 75px;
  @media ${device.tablet} {
    font-size: 42px;
    margin-top: 7px;
    margin-bottom: 7px;
  }
  @media ${device.laptop} {
    font-size: 56px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

export const Label = styled.div`
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Time = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 19px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 17px;
  margin-top: 10%;
  text-align: center;
  @media ${device.laptop} {
    font-size: 19px;
    margin-top:20%;
  }
`;

export const Item = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 12px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  @media ${device.laptop} {
    font-size: 14px;
  }
`;

export const Percentage = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 17px;
  text-align: center;
  @media ${device.laptop} {
    font-size: 19px;
  }
`;


export const Indicadores = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 70px;
  margin-bottom: 35px;
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const Icos24 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  text-align: center;
`;

export const Icos24Hor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  @media ${device.tablet} {
    margin-right: 15px;
    margin-left: 15px;
  }
  @media ${device.laptop} {
    margin-right: 27px;
    margin-left: 27px;
  }
`;

export const WorkData = styled.div`
  @media ${device.laptop} {
    background-color: #e8eaf6;
    width: 60%;
    display: flex;
    flex-direction: column;
  }
  @media ${device.tablet} {
    background-color: #e8eaf6;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const InfoToday = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
`;

export const DivJ = styled.div`
  display: flex;
  align-items: center;
`;

export const Break = styled.button`
@media ${device.tablet} {
  width: 50%;
  font-size: 20px;
  cursor: pointer;
}
  width: 50%;
  padding: 10px;
  color: #ffffff;
  border:1px solid #1db779;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  border-radius: 3px;
  background-color:${props => props.propLunch === false ? '#1CB779' : '#FF4343'};
  outline:none;
  cursor: pointer;
`;
