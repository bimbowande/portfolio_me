import styled from "styled-components";
import { HeaderTextI } from "../interface";
import {fontSize} from '../variables';


export const HeaderText = styled.h1<HeaderTextI>`
  font-size: ${props=> props.fontSize || fontSize?.largeText };
  text-align: ${props=> props.textAlign};
  color: ${props=> props.color}

`
  
export const BodyText = styled.p`
  color: #fff;
  text-align:center;
  line-height:30px;
  font-size:.9rem

`




