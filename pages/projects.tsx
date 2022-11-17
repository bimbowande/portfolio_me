import type { NextPage } from 'next'
import React from 'react'
import { PageContent, PageHeader } from '../common/Project/styles'
import { Layout } from '../components/Layout/Layout';
import { ProjectCard } from '../components/ProjectCard/ProjectCard'
import { ProjectSectionContainer } from '../components/ProjectCard/style'

 const Projects: NextPage = () => {
  return (
    <Layout>
        <div>
          <PageHeader>{`{`} Projects {`}`}</PageHeader>
            <PageContent>Projects i have worked on.</PageContent>
            <ProjectSectionContainer>
              <ProjectCard  ProjectName={`Stripe`} stacks={['HTML','CSS','React']} link={''}  description={`A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them`}/>
              <ProjectCard  description={`A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them`} ProjectName={`StandIn`} stacks={['Angular','CSS','SASS']} link={''}/>
              <ProjectCard   ProjectName={`Github`} stacks={['Angular' ,'CSS' ,'SASS']} link={''} description={`A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them`}/>
              <ProjectCard  ProjectName={`Personal Project`} stacks={['Angular' ,'CSS' ,'SASS']} link={``} description={`A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them`}/>
             <ProjectCard  ProjectName={`Amanda`} stacks={['Angular' ,'CSS' ,'SASS']} link={``} description={`A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them`}/>
             <ProjectCard  ProjectName={`Amanda`} stacks={['Angular' ,'CSS' ,'SASS']} link={``} description={`A frame website that helps users to easily purchase different kind of frame and it sizes and also get it delivered to them`}/>
            </ProjectSectionContainer>
        </div>
    </Layout>
  )
}

export default Projects