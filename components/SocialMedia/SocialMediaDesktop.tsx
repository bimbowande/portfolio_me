import React from 'react'
import { SocialContainer, SocialMediaLink, SocialText } from './styles';
import { Manifest } from '../../pages/api/manifest';

export const SocialMediaDesktop = () => {
  return (
    <SocialContainer >
        <SocialMediaLink>
            <SocialText href={Manifest?.socialLinks?.tw}>Twitter</SocialText>
        </SocialMediaLink>
        <SocialMediaLink>
            <SocialText href={Manifest?.socialLinks?.in}>Linkedin</SocialText>
        </SocialMediaLink>
        <SocialMediaLink>
            <SocialText href={Manifest?.socialLinks?.medium}>Medium</SocialText>
        </SocialMediaLink>
        <SocialMediaLink>
            <SocialText href={Manifest?.socialLinks?.github}>Github</SocialText>
        </SocialMediaLink>
    </SocialContainer>
    
  )
}
