import styled from "styled-components";
import { devices } from "../../styles/Media/devices";


export const TextArea = styled.textarea`
    width:100%;
    height:100px;
    padding:15px;
    border-radius:4px;
    background-color:#101010;
    resize:none;
    @media ${devices?.mobile}{
        font-weight:200;
    }
`

export const InputBox = styled.input`
    width:100%;
    padding:15px;
    margin-bottom:20px;
    border-radius:4px;
    background-color:#101010;
    @media ${devices?.mobile}{
        margin-bottom:15px;
        font-weight:200;
    }
`

export const PageSection = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:100px;

    @media ${devices?.mobile}{
        width:100%;
        margin-top:40px;
    }


`
export const InputGroup = styled.div`
    width:600px;
    @media ${devices?.mobile}{
        width:100%;
    }
`

export const ContactBtn = styled.button`
    padding:10px;
    width:150px;
    border-radius:4px;
    background-color:#11895B;
    color:#fff;
`
