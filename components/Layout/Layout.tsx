import React, { ReactElement, useState} from 'react'
import { LayoutContainer } from '../../styles';
import { MetaHead } from '../MetaHead';
import { Navbar } from '../Navbar/Navbar';
import {Manifest} from '../../pages/api/manifest'
import { Menu } from '../Menu/Menu';



export interface LayoutProps {
    children?: ReactElement
}

export const Layout : React.FC<LayoutProps> = LayoutProps => {

  const [menu, changeMenu] = useState<boolean>(true);

  const toggleMenu = () => changeMenu(!menu)
  

  return (
    <>
     <MetaHead/>
     <>
      <LayoutContainer>
         { menu && <Menu switchMenu = {toggleMenu}/>}
          <Navbar switchMenu={toggleMenu} title={Manifest?.personalInfo?.name}/>
          {LayoutProps?.children}
      </LayoutContainer> 
     </>
   </>
  )
}