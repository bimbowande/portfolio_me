import React from 'react'
import type {NextPage} from 'next'
import { PageHeader } from '../common/Project/styles'
import { Layout } from '../components/Layout/Layout'
import { ListItem, ResumeContent, ResumeSectionOne, ResumeSectionThree, ResumeSectionTwo, ResumeSubSection, SectionHeader, UserName } from '../common/Resume/Styles'
import { Manifest } from './api/manifest'

 const Resume: NextPage = () => {
  return (
   <Layout>
        <div className='push_down_resume'>
            <PageHeader>{`{`} Resume {`}`}</PageHeader>
            <ResumeContent>
                <ResumeSectionOne>
                    <ResumeSubSection>
                        <SectionHeader>Bimbowande</SectionHeader>
                        <UserName>bimbowande@gmail.com</UserName>
                    </ResumeSubSection>
                    <ResumeSubSection>
                        <SectionHeader>FrameWorks</SectionHeader>
                        {Manifest?.frameworks.map((item:string, index:number)=>
                            <ListItem key={index}>{item}</ListItem>
                        )}
                    </ResumeSubSection>
                    <ResumeSubSection>
                        <SectionHeader>Core Technologies</SectionHeader>
                        {Manifest?.coreTechnologies.map((item:string, index:number)=>
                            <ListItem key={index}>{item}</ListItem>
                        )}
                    </ResumeSubSection>
                    <ResumeSubSection>
                        <SectionHeader>Other technologies</SectionHeader>
                        {Manifest?.otherTechnologies.map((item:string, index:number)=>
                            <ListItem key={index}>{item}</ListItem>
                        )}
                    </ResumeSubSection>
                </ResumeSectionOne>
                <ResumeSectionTwo></ResumeSectionTwo>
                <ResumeSectionThree></ResumeSectionThree>
            </ResumeContent>
        </div>
   </Layout>
  )
}


export default Resume