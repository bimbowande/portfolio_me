import styled from "styled-components";
import { devices } from "../../styles/Media/devices";
import { colorvar } from "../../styles/variables";

export const ProjectText = styled.h3`
    font-size:1.2rem;

    margin:0
`
export const SectionContainer = styled.div`
    display:flex;
    gap:1rem;
    flex-flow:wrap;
`

export const ProjectCardContainer = styled.div`
    background-color:${colorvar?.cardColor};
    width:30%;
    padding:1.9rem; 

    @media ${devices?.mobile}{
        width:100%;
    }
`

export const StackTextContainer = styled.div`
    background-color:${colorvar?.skillColor};
    padding:0.34rem;
    min-width:60px;
    text-align:center;
`

export const StacktText = styled.span`
    font-size:.80rem;
    font-weight:500;
`

export const ProjectSectionContainer = styled.div`
    display:flex;
    width:100%;
    flex-flow:wrap;
    justify-content:center;
    margin-top:50px;
    gap:4rem;
    overflow:scroll;

    @media ${devices?.mobile}{
        flex-direction:column;
        gap:2rem;
        padding-bottom:30px;
    }
`

export const ContainerDiv = styled.div`
`

export const ParagraphText = styled.p`
    font-size:.85rem;
    margin-top:10px;
    height:40px;
    line-height:24px;
`