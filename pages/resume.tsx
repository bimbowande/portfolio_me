import React from 'react'
import type {NextPage} from 'next'
import { PageHeader } from '../common/Project/styles'
import { Layout } from '../components/Layout/Layout'
import {Button, ButtonContainer, IconBtn, ResumeContent, ResumeSectionOne, ResumeSectionThree, ResumeSectionTwo} from '../common/Resume/Styles'

import { Skills } from '../common/Resume/Technology/Skills'
import { UserSummary } from '../common/Resume/UserSummary/UserSummary'
import { Manifest } from './api/manifest'
import { Experience } from '../common/Resume/Experience/Experience'

 const Resume: NextPage = () => {
  return (
   <Layout>
        <div className='push_down_resume'>
            <PageHeader>{`{`} Resume {`}`}</PageHeader>
            <ResumeContent>
                <ResumeSectionOne>
                    <Skills/>
                </ResumeSectionOne>
                <ResumeSectionTwo>
                   <UserSummary username={`${Manifest?.personalInfo?.name}  ${Manifest?.personalInfo?.surname}`} title={`${Manifest?.personalInfo?.title}`} description={`${Manifest?.personalInfo?.summary}`}/>
                   <Experience/>
                </ResumeSectionTwo>
                <ResumeSectionThree>
                    <ButtonContainer>
                        <Button> Download CV <IconBtn className="fa-solid fa-calendar-arrow-down"></IconBtn></Button>
                    </ButtonContainer>
                </ResumeSectionThree>
            </ResumeContent>
        </div>
   </Layout>
  )
}


export default Resume