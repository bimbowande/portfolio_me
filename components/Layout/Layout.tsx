import React, { ReactElement} from 'react'
import { LayoutContainer } from '../../styles';
import { MetaHead } from '../MetaHead';
import { Navbar } from '../Navbar/Navbar';
import {Manifest} from '../../pages/api/manifest'
import { Menu } from '../Menu/Menu';



export interface LayoutProps {
    children?: ReactElement
}

export const Layout : React.FC<LayoutProps> = LayoutProps => {
  return (
    <>
     <MetaHead/>
     <>
      <LayoutContainer>
          <Menu/>
          <Navbar title={Manifest?.personalInfo?.name}/>
          {LayoutProps?.children}
      </LayoutContainer> 
     </>
   </>
  )
}