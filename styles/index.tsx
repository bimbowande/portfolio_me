import styled from "styled-components";

export interface LayoutContainerProp{
  bgColor?: string
}

export interface ContainerI{
  textAlign?:string
}

export const LayoutContainer = styled.div<LayoutContainerProp>`
  width: 90%;
  margin: 0 auto;
  height:100%;
  padding: 10px;
  background-color: #000;
`

export const Container =  styled.div<ContainerI>`
  textalign:${(props) => props.textAlign}
  
`
export const SectionContainer =  styled.section`
 width: 100%;
 display:flex;
`