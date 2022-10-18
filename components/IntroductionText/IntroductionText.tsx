import React from 'react'
import { Container } from '../../styles';
import { HeaderText } from '../../styles/Fonts';
import { BodyText } from '../Navbar/styles';


export interface IntroTextPropI {
    title?:string,
    text?: string
}

export const IntroductionText: React.FC<IntroTextPropI> = IntroTextPropI => {
  return (
    <Container>
        <HeaderText>{IntroTextPropI?.title}</HeaderText>
        <BodyText>
            {IntroTextPropI?.text}
        </BodyText>
    </Container>
  )
}
