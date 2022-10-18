import styled from "styled-components";
import { HeaderTextI } from "../interface";
import {fontSize} from '../variables';


export const HeaderText = styled.h1<HeaderTextI>`
  font-size: ${props=> props.fontSize || fontSize?.largeText };
`