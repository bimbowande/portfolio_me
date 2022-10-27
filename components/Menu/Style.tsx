import styled from "styled-components";
import { colorvar } from "../../styles/variables";

export const MenuStyle = styled.div`

    position:absolute;
    height:100%;
    top:0;
    left:0;
    display:flex;
    width:100%;
    overflow:hidden;
    background-color:#000;
    z-index:8656789;

`

export const MenuDivisionOne = styled.div`
flex:1;
 background-color: ${colorvar?.lighterGrey};
 
`

export const MenuDivisionTwo = styled.div`
 flex:5;
 display:flex;
 justify-content: space-between;
 
`

export const SectionOne = styled.div `
    padding:20px;
    padding-left: 120px;
    padding-top:60px;

`

export const SectionTwo = styled.div`
    padding:20px;
    padding-top:60px;
`

export const MenuNavHeading = styled.div``

export const MenuNavBody = styled.div`
margin-top:150px

` 
export const MenuLinkText =  styled.div`
margin-bottom:40px;
`
export const MenuLink = styled.a`
    text-transform:capitalize;
    font-size:2.0rem;
    font-weight:800;
`
export const MenuIcon = styled.i`
    font-size:30px;
    color:#11895B;
    cursor:pointer;
`

export const MenuSocialLink = styled.div`
    border: 1px solid red;
    width:300px;
    height:300px;
`
export const SocialLinkContainer = styled.div`

`