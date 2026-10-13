import React from 'react'
import type {NextPage} from 'next'
import { PageHeader } from '../common/Project/styles'
import { Layout } from '../components/Layout/Layout'
import {Button, ButtonContainer, IconBtn, ResumeContent, ResumeSectionOne, ResumeSectionThree, ResumeSectionTwo} from '../common/Resume/Styles'

import { Skills } from '../common/Resume/Technology/Skills'
import { UserSummary } from '../common/Resume/UserSummary/UserSummary'
import { cv, Manifest } from './api/manifest'
import { Experience } from '../common/Resume/Experience/Experience'
import { MetaHead } from '../components/MetaHead'


 const Resume: NextPage = () => {
  return (
   <Layout>
        <div className='push_down_resume'>
            <PageHeader>{`{`} Resume {`}`}</PageHeader>
            <MetaHead title='Abimbola Oluwagbuyi - Resume'/>
            <ResumeContent>
                <ResumeSectionOne>
                    <Skills/>
                </ResumeSectionOne>
                <ResumeSectionTwo>
                   <UserSummary username={`${Manifest?.personalInfo?.name}  ${Manifest?.personalInfo?.surname}`} title={`${Manifest?.personalInfo?.title}`} description={`${Manifest?.personalInfo?.resumeSummary}`}/>
                   <Experience/>
                </ResumeSectionTwo>
                <ResumeSectionThree>
                    <ButtonContainer>
                        <Button as="a" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${cv.link2}`} download> Download CV <IconBtn className="fa-solid fa-calendar-arrow-down" /></Button>
                    </ButtonContainer>
                </ResumeSectionThree>
            </ResumeContent>
        </div>
   </Layout>
  )
}


export default Resume