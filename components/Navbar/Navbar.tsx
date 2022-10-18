import React from 'react';

import {HeaderText} from '../../styles/Fonts'
import { NavContainer, NavIcon, NavIconContainer, NavText } from './styles';


export interface NavbarI {
    title?: string

}

export const Navbar: React.FC<NavbarI> = (NavbarI) => {
  return (
    <NavContainer>
       <NavText>
        <HeaderText>{NavbarI?.title || `Username not found`}</HeaderText>
       </NavText>
       
        <NavIconContainer>
          <NavIcon className="uil uil-align-right"></NavIcon>
        </NavIconContainer>
    </NavContainer>
  )
}


