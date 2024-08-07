import React from 'react'
import { Container } from '../../styles';
import { HeaderText,BodyText } from '../../styles/Fonts';
import { colorvar } from '../../styles/variables';
import { SocialMediaMobile } from '../SocialMedia/SocialMediaMobile';
import { Icon } from '../SocialMedia/styles';
import { IntroContainer } from './styles';
import { UserName } from '../../common/Resume/Styles';


export interface IntroTextPropI {
    title?:string,
    text?: string
    userName: string
}

export const IntroductionText: React.FC<IntroTextPropI> = IntroTextPropI => {
  return (
    <IntroContainer>
       <Icon className="fa-light fa-triangle"></Icon>
        <HeaderText color={colorvar?.greyColor} fontSize='.9rem' textAlign='center'>{IntroTextPropI?.title}</HeaderText>
        <Container textAlign='center'>
            <HeaderText textAlign='center'>Hello, I{`'`}m { IntroTextPropI.userName ?? `Username`}</HeaderText>
            <BodyText>
                {IntroTextPropI?.text}
            </BodyText>
            <SocialMediaMobile/>
        </Container>
    </IntroContainer>
  )
}
