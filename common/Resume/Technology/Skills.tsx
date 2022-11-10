import React from 'react'
import { Manifest } from '../../../pages/api/manifest'
import { ResumeSubSection, SectionHeader, UserName } from '../Styles'
import { Stack } from './Stack'

export const Skills:React.FC = () => {
  return (
   <>
     <ResumeSubSection>
        <SectionHeader>Bimbowande</SectionHeader>
        <UserName>bimbowande@gmail.com</UserName>
     </ResumeSubSection>

     <Stack headerText='FrameWorks'  data={Manifest?.frameworks}/>

     <Stack headerText='Core Technologies'  data={Manifest?.coreTechnologies}/>

     <Stack headerText='Other technologies'  data={Manifest?.otherTechnologies}/>
   </>
  )
}
