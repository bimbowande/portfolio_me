import styled from "styled-components";

export interface LayoutContainerProp{
  bgColor?: string
}

export const LayoutContainer = styled.div<LayoutContainerProp>`
  width: 100%;
  height:100%;
  padding: 10px;
  background-color: #000;
`

export const Container =  styled.div`
`
export const SectionContainer =  styled.section`
 width: 100%
 border:1px solid red;
`