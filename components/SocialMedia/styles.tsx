import styled from "styled-components";
import { colorvar } from "../../styles/variables"; 
import { devices } from "../../styles/Media/devices";

export const SocialContainer = styled.div`
    margin-top:80px;
    flex: 1;
    @media ${devices?.mobile}{
       display:none
    }
`

export const SocialMediaLink = styled.div`
 margin-bottom:100px;
 position:relative;
 height:3px;
 @media ${devices.mobile}{
    margin:5px;
    height:auto;
 }
 
`

export const SocialText = styled.a`
  transform: matrix(0, -1, 1, 0, 0, 0);
  transform-origin: 0 0;
  font-weight:600;
  font-size:.96rem;
  color: ${colorvar?.linkColor};
  position:absolute;
  text-transform:capitalize;

  &:hover{
    font-weight: 700;
  }
  @media ${devices?.mobile}{
    transform:none;
    position:relative;
    padding:10px;
    display:flex;
    height:50px;
    width:50px;
    align-items:center;
    justify-content:center;
    border:1px solid ${colorvar?.greenColor};
    border-radius:30px;
  }
`

export const SocialMobile = styled.div`
   display:none;
   margin-top:40px;

   @media ${devices?.mobile}{
    display:flex;
    gap:1rem;
    align-items:center;
    justify-content:center;
   }
` 

export const Icon = styled.i`
   font-size:18px
`