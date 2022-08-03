import React from 'react';
import { Container} from '../../styles';
import {HeaderText} from '../../styles/Fonts'


export interface NavbarI {
    title?: string

}

export const Navbar: React.FC<NavbarI> = (NavbarI) => {
  return (
    <Container>
        <HeaderText>{NavbarI?.title || `Username not found`}</HeaderText>
        <div>
            
        </div>
        </Container>
  )
}


