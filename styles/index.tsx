import styled from "styled-components";
import { devices } from "./Media/devices";

export interface LayoutContainerProp{
  bgColor?: string
}

export interface ContainerI{
  textAlign?:string
}

export const LayoutContainer = styled.div<LayoutContainerProp>`
  width: 100%;
  color:#fff;
  height:100%;
  padding: 10px;
  background-color: #000;

  @media ${devices?.mobile}{
    padding:0;
  }
`

export const Container =  styled.div<ContainerI>`
  text-align:${(props) => props.textAlign}
  
`
export const SectionContainer =  styled.section`
 width: 100%;
 display:flex;
`

export const LayoutContent =  styled.div`
  width:90%;
  margin: 0 auto;
`