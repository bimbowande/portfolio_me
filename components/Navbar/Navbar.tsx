import React, { useEffect } from 'react';

import {HeaderText} from '../../styles/Fonts'
import { NavContainer, NavContent, NavIcon, NavIconContainer, NavText } from './styles';


export interface NavbarI {
    title?: string,
    switchMenu?:()=>void
    refPointer?:any

}


export const Navbar: React.FC<NavbarI> = (NavbarI) => {

  useEffect(()=>{

  },[NavbarI?.refPointer])
  return (
    <NavContainer   ref={NavbarI?.refPointer}>
       <NavText>
        <HeaderText>{NavbarI?.title || `Username not found`}</HeaderText>
       </NavText>
        
        <NavIconContainer>
          <NavContent>
             <NavIcon onClick={NavbarI?.switchMenu} className="fa-solid fa-bars"></NavIcon>
          </NavContent>
         
        </NavIconContainer>
    </NavContainer>
  )
}


