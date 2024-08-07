import React from 'react'
import type {NextPage} from 'next'
import { PageHeader } from '../common/Project/styles'
import { Layout } from '../components/Layout/Layout'
import {Button, ButtonContainer, IconBtn, ResumeContent, ResumeSectionOne, ResumeSectionThree, ResumeSectionTwo} from '../common/Resume/Styles'

import { Skills } from '../common/Resume/Technology/Skills'
import { UserSummary } from '../common/Resume/UserSummary/UserSummary'
import { Manifest } from './api/manifest'
import { Experience } from '../common/Resume/Experience/Experience'
import { MetaHead } from '../components/MetaHead'
import Link from 'next/link'


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
                       <Link href='/abimbola_oluwagbuyi_cv.pdf'  passHref><Button> Download CV <IconBtn className="fa-solid fa-calendar-arrow-down"></IconBtn></Button></Link> 
                    </ButtonContainer>
                </ResumeSectionThree>
            </ResumeContent>
        </div>
   </Layout>
  )
}


export default Resume