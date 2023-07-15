import React, { ReactElement, useState,useRef} from 'react'
import { LayoutContainer, LayoutContent } from '../../styles';
import { MetaHead } from '../MetaHead';
import { Navbar } from '../Navbar/Navbar';
import {Manifest} from '../../pages/api/manifest'
import { Menu } from '../Menu/Menu';



export interface LayoutProps {
    children?: ReactElement
}

export const Layout : React.FC<LayoutProps> = LayoutProps => {

  const [menu, changeMenu] = useState<boolean>(false);

  const navbarRef = useRef();

  const toggleMenu = () => changeMenu(!menu)
  

  return (
    <>
     <MetaHead/>
     <>
      <LayoutContainer>
        <LayoutContent>
         { menu && <Menu switchMenu = {toggleMenu}/> }
            <Navbar switchMenu={toggleMenu} refPointer={navbarRef} title={Manifest?.personalInfo?.name}/>
          {LayoutProps?.children}
          </LayoutContent>
      </LayoutContainer> 
     </>
   </>
  )
}