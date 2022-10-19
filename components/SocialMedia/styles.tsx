import styled from "styled-components";
import { colorvar } from "../../styles/variables"; 

export const SocialContainer = styled.div`
    margin-top:80px;
    flex: 1;
`

export const SocialMediaLink = styled.div`
 margin-bottom:100px;
 position:relative;
 height:3px
 
`

export const SocialText = styled.a`
  transform: matrix(0, -1, 1, 0, 0, 0);
  transform-origin: 0 0;
  font-weight:100;
  font-size:.96rem;
  color: ${colorvar?.linkColor};
  position:absolute;

  &:hover{
    font-weight: 700;
  }
`