import React, { ReactElement} from 'react'
import { LayoutContainer } from '../../styles'
import { MetaHead } from '../MetaHead'
import { Navbar } from '../Navbar/Navbar'

export interface Props {
    children?: ReactElement,
    title?: string
}

export const Layout : React.FC<Props> = (Props) => {
  return (
   <>
     <MetaHead/>
     <>
     <LayoutContainer>
        <Navbar title={Props?.title}/>
        {Props?.children}
     </LayoutContainer> 
     </>
   </>
  )
}