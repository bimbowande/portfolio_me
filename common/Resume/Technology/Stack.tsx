import React from 'react'
import { ListItem, ResumeSubSection, SectionHeader } from '../Styles'


export const Stack: React.FC<StackI> = (StackI) => {
  return (
    <ResumeSubSection>
         <SectionHeader>{StackI?.headerText}</SectionHeader>
         {
            StackI.data.map((item:string, index:number)=> 
                <ListItem key={index}>{item}</ListItem>
            )
         }
    </ResumeSubSection>
  )
}


export interface StackI {
    data:Array<string>,
    headerText: string,
}