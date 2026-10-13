import React from 'react';
import {
  ContainerDiv,
  ParagraphText,
  ProjectCardContainer,
  ProjectText,
  SectionContainer,
  StackTextContainer,
  StacktText,
} from './style';

export interface ProjectcardI {
  ProjectName?: string;
  stacks?: string[];
  description?: string;
  link: string;
}

export const ProjectCard: React.FC<ProjectcardI> = ({
  ProjectName,
  stacks = [],
  description,
  link,
}) => {
  return (
    <ProjectCardContainer>
      <ProjectText>{ProjectName}</ProjectText>

      <ContainerDiv>
        <ParagraphText>{description}</ParagraphText>
      </ContainerDiv>

      <SectionContainer>
        {stacks.map((data, index) => (
          <StackTextContainer key={index}>
            <StacktText>{data}</StacktText>
          </StackTextContainer>
        ))}
      </SectionContainer>

      <div style={{ marginTop: 20, fontSize: 15 }}>
        <em>
          <a style={{ textDecoration: 'underline' }} href={link}>
            link to project
          </a>
        </em>
      </div>
    </ProjectCardContainer>
  );
};