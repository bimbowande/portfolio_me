import React from 'react'
import { SocialContainer, SocialMediaLink, SocialText } from './styles';
import { socialLinksI } from '../../pages/api/interface'; 
import { Manifest } from '../../pages/api/manifest';

export const SocialMediaDesktop = () => {
  return (
    <SocialContainer>
        {Manifest?.socialLinks.map((linkObj:socialLinksI, index:number)=>
            <SocialMediaLink key={index}>
                <SocialText href={linkObj?.link}>{linkObj?.name}</SocialText>
            </SocialMediaLink>        
        )}

    </SocialContainer>
    
  )
}
