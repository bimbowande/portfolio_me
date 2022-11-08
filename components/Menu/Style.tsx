import styled from "styled-components";
import { devices } from "../../styles/Media/devices";
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

    @media ${devices?.mobile}{
        display:none
    }
 
`

export const MenuDivisionTwo = styled.div`
    flex:5;
    display:flex;
    justify-content: space-between;
    @media ${devices?.mobile}{
        flex-direction:column-reverse;
    }
`

export const SectionOne = styled.div `
    padding:20px;
    padding-left: 120px;
    padding-top:60px;

    @media ${devices?.mobile}{
        padding:0;
        flex:10;        
    }
`

export const SectionTwo = styled.div`
    padding:20px;
    padding-top:60px;

    @media ${devices?.mobile}{
        text-align:right;
        padding-top:30px;
    }
`

export const MenuNavHeading = styled.div`
    @media ${devices?.mobile}{
        text-align:center;
    }
`

export const MenuNavBody = styled.div`
    margin-top:150px;
    @media ${devices?.mobile}{
        text-align:center;
    }
` 

export const MenuLinkText = styled.div`
    margin-bottom:40px;
`

export const MenuLink = styled.a`
    text-transform:capitalize;
    font-size:2.0rem;
    font-weight:800;

    @media ${devices?.mobile}{
        font-size:1.4rem;
        text-align:center;
    }
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

    &:hover{
        background:rgba(233,233,233,.2);
    }
`

export const MenuSocialLink = styled.div`
    width:300px;
    display:flex;
    height:300px;
    gap:2rem;

    @media ${devices?.mobile}{
        display:none; 
    }
`

export const SocialLinkContainer = styled.div`
    border-radius:50px;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const NavClose = styled.i`
    font-size:2.3rem;
    cursor:pointer;
    color:${colorvar?.greenColor};

    @media ${devices?.mobile}{
        font-size:1.8rem;
    }
`