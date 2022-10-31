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

export const MenuLinkText = styled.div`
    margin-bottom:40px;
`

export const MenuLink = styled.a`
    text-transform:capitalize;
    font-size:2.0rem;
    font-weight:800;
   
`

export const MenuIcon = styled.i`
    font-size:18px;
    cursor:pointer;
    color:white;
`

export const MenuLinkAdd = styled.a`
    border:1px solid #707070;
    width:60px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50px;
    cursor:pointer;
    t

    &:hover{
        background:rgba(233,233,233,.2);
    }
`
export const MenuSocialLink = styled.div`
    width:300px;
    display:flex;
    height:300px;
    gap:2rem;
   
`

export const SocialLinkContainer = styled.div`
    border-radius:50px;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const NavClose = styled.i`
font-size:1.5rem

`