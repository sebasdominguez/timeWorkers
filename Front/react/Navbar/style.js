import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const NavCont = styled.div`
background-color: #273947;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
padding-top: 1vh;
padding-bottom: 1vh;
padding-left: 3%;
padding-right: 3%;
height: 3vh;
@media ${device.tablet} {
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 6%;
  padding-right: 6%;
}
`;

export const Nav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 20px;
margin-left: 20px;
align-items: center;
`;

export const Button = styled.button`
border: 0px;
background-color: transparent;
cursor: pointer;
`

export const ImgExit = styled.img`
height: 30px;
width: 30px;
box-sizing: border-box;
border-radius: 5px;
border: 0px;
`;

export const ImgLogo = styled.img`
width: 100px;
height: auto;
  @media ${device.tablet} {
    width: 75px;
  }
`;