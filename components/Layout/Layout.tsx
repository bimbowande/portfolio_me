import React from 'react'
import { MetaHead } from '../MetaHead'
import { Navbar } from '../Navbar/Navbar'

export const Layout : React.FC = () => {
  return (
   <>
     <MetaHead/>
     <>
       <Navbar/>
     </>
   </>
  )
}
