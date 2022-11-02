import React from 'react'
import { Manifest } from '../../pages/api/manifest';
import { socialLinksI } from '../../pages/api/interface'; 
import { Icon, SocialMediaLink, SocialMobile, SocialText } from './styles'

export const SocialMediaMobile = () => {
  return (
    <SocialMobile>
        {
          Manifest?.socialLinks.map((linkObj:socialLinksI, index:number)=>
          <SocialMediaLink key={index}>
            <SocialText href={linkObj?.link}>
              <Icon className={`fa-brands ${linkObj?.class} media_icons`}></Icon>
            </SocialText>
          </SocialMediaLink>
          )
        }
    </SocialMobile>
  )
}
