import React from 'react'
import { ExpContainer, ExpHeader, ExpSection } from './Styles'
import { Manifest } from '../../../pages/api/manifest';
import { ExperienceI } from '../../../pages/api/interface';
import { ExComp } from './ExComp';

export const Experience = () => {
  return (
   <ExpContainer>
        <ExpSection>
            <ExpHeader>Experience</ExpHeader>
        </ExpSection>
        {/** */}
        <ExpSection>
            {Manifest?.experiences.map((data:ExperienceI)=>
            <ExComp company={data?.company} title={data?.title} startDate={data?.startDate} endDate={data?.endDate} accomplishment={data?.accomplishment} />)}
        </ExpSection>
   </ExpContainer>
  )
}
