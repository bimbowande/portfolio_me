import styled from "styled-components";

import { devices } from "../../styles/Media/devices";


export const ResumeContent =  styled.section`
    display:flex;
    height:auto;
    @media ${devices?.mobile}{
        flex-direction:column-reverse;
        
    }
`

export const ResumeSectionOne =  styled.section`
    flex:2;
`

export const ResumeSectionTwo = styled.section`
    flex:5;
`

export const ResumeSectionThree = styled.section`
    flex:1;
`
export const UserName = styled.p`
`

export const ResumeSubSection = styled.div`
    margin-top:30px;
`
export const SectionHeader = styled.h3`
    margin:0;
    margin-bottom:10px;
    margin-top:10px
`

export const ListItem = styled.li`
    list-style:none;
    font-size:.9rem;
    margin-bottom:8px
`

export const UserSummaryDetails = styled.div`
    margin-bottom:60px
`

export const SummaryUser = styled.h2`
    margin-top:30px;
    margin-bottom:5px
`

export const SummaryTitle = styled.h4`
    margin-top:1px;
    margin-bottom:4px;
    font-size:.97rem;
    font-weight:600
`

export const SummaryDescription = styled.p`
    margin-top:3px;
    font-size:.87rem
`

export const ButtonContainer = styled.div`
    text-align:center;
    padding-top:40px;
`

export const Button = styled.button`
    padding:15px;
    width:100%;
    background-color:#1F1F1F;
    color:#fff;
    border:none;
    font-weight:500;
    border-radius:5px;
`

export const IconBtn = styled.i`
    color:white;
`