import React from 'react'
import type {NextPage} from 'next'
import { PageHeader } from '../common/Project/styles'
import { Layout } from '../components/Layout/Layout'
import {ResumeContent, ResumeSectionOne, ResumeSectionThree, ResumeSectionTwo} from '../common/Resume/Styles'

import { Skills } from '../common/Resume/Technology/Skills'
import { UserSummary } from '../common/Resume/UserSummary/UserSummary'

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
                   <UserSummary username={''} title={''} description={''}/>
                </ResumeSectionTwo>
                <ResumeSectionThree>

                </ResumeSectionThree>
            </ResumeContent>
        </div>
   </Layout>
  )
}


export default Resume