import React from 'react'
import { ExpCompName, ExpContainer, ExpContent, ExpDescription, ExpTime, ExpTitle, Line } from './Styles'
import { ExperienceI } from '../../../pages/api/interface'

export const ExComp: React.FC<ExperienceI> = (ExperienceI
 ) => {
  return (
   <ExpContent>
        <ExpCompName>{ExperienceI?.company} <Line/> <ExpTitle>{ExperienceI?.title}</ExpTitle>
        </ExpCompName>
        <ExpTime>{ExperienceI?.startDate} - {ExperienceI?.endDate}</ExpTime>
        <ExpDescription>{ExperienceI?.accomplishment}</ExpDescription>
   </ExpContent>
  )
}