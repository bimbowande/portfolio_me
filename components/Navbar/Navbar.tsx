import React from 'react';
import {personalInterfaceI} from '../../pages/api/interface'


export interface NavbarI {
    title?: string

}

export const Navbar: React.FC<NavbarI> = (NavbarI) => {
  return (
    <div>
        <h2>{NavbarI?.title || `Username not found`}</h2>
        <div>

        </div>
    </div>
  )
}


