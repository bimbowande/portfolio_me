import React from 'react'
import { ContainerDiv, ParagraphText, ProjectCardContainer, ProjectText, SectionContainer, StackTextContainer, StacktText } from './style'

export interface ProjectcardI {
    ProjectName?: string,
    stacks: Array<string>,
    description?: string
    link: string
} 

export const ProjectCard:React.FC<ProjectcardI> = (ProjectcardI) => {
  return (
    <ProjectCardContainer>
        <ProjectText>{ProjectcardI?.ProjectName}</ProjectText>
        <SectionContainer>
            {ProjectcardI?.stacks.map((data:string,index:number)=> 
                <StackTextContainer key={index}>
                    <StacktText>{data}</StacktText>
                </StackTextContainer>
            )}
        </SectionContainer>
        <ContainerDiv>
            <ParagraphText>{ProjectcardI?.description}</ParagraphText>
        </ContainerDiv>
        <div>
            <h4><a href={ProjectcardI?.link}>{ProjectcardI?.link} </a></h4>
        </div>
    </ProjectCardContainer>
  )
}
