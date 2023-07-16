import type { NextPage } from 'next'
import React from 'react'
import { PageContent, PageHeader } from '../common/Project/styles'
import { Layout } from '../components/Layout/Layout';
import { ProjectCard } from '../components/ProjectCard/ProjectCard'
import { ProjectSectionContainer } from '../components/ProjectCard/style'
import { Manifest } from './api/manifest'; 
import { ProjectI } from './api/interface';
import { MetaHead } from '../components/MetaHead';

 const Projects: NextPage = () => {
  return (
    <Layout>
        <div>
        <MetaHead title='Abimbola Oluwagbuyi - Projects'/>
          <PageHeader>{`{`} Projects {`}`}</PageHeader>
            <PageContent>Projects i have worked on.</PageContent>
            <ProjectSectionContainer>
              {Manifest.projects.map((p:ProjectI, index:number)=>
              <ProjectCard key={index} ProjectName={p.name} stacks={p.skills} description={p.description} link={p.link || ''}/>
              )}
              
            </ProjectSectionContainer>
        </div>
    </Layout>
  )
}

export default Projects