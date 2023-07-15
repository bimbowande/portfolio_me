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
       
        <ContainerDiv>
            <ParagraphText>{ProjectcardI?.description}</ParagraphText>
        </ContainerDiv>
        <SectionContainer>
            {ProjectcardI?.stacks.map((data:string,index:number)=> 
                <StackTextContainer key={index}>
                    <StacktText>{data}</StacktText>
                </StackTextContainer>
            )}
        </SectionContainer>
        <div style={{marginTop:20, fontSize:15}}>
            <em><a style={{textDecoration:'underline'}} href={ProjectcardI?.link}>link to project </a></em>
        </div>
    </ProjectCardContainer>
  )
}
