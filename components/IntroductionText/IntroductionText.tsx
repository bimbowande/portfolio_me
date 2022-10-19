import React from 'react'
import { Container } from '../../styles';
import { HeaderText,BodyText } from '../../styles/Fonts';
import { colorvar } from '../../styles/variables';
import { IntroContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export interface IntroTextPropI {
    title?:string,
    text?: string
}

export const IntroductionText: React.FC<IntroTextPropI> = IntroTextPropI => {
  return (
    <IntroContainer>
        <i className="fa-solid fa-triangle"></i>
        <HeaderText color={colorvar?.greyColor} fontSize='.9rem' textAlign='center'>{IntroTextPropI?.title}</HeaderText>
        <Container textAlign='center'>
            <HeaderText textAlign='center'>Hello, I'm Abimbola</HeaderText>
            <BodyText>
                {IntroTextPropI?.text}
            </BodyText>
        </Container>
    </IntroContainer>
  )
}
