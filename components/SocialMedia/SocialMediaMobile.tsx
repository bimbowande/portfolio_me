import React from 'react'
import { Manifest } from '../../pages/api/manifest'
import { Icon, SocialMediaLink, SocialMobile, SocialText } from './styles'

export const SocialMediaMobile = () => {
  return (
    <SocialMobile>
       <SocialMediaLink>
            <SocialText href={Manifest?.socialLinks?.tw}>
            <Icon className="fa-brands fa-github media_icons"></Icon>
            </SocialText>
        </SocialMediaLink>
        <SocialMediaLink>
            <SocialText href={Manifest?.socialLinks?.tw}>
             <Icon className="fa-brands fa-twitter media_icons"></Icon>
            </SocialText>
        </SocialMediaLink>
        <SocialMediaLink>
            <SocialText href={Manifest?.socialLinks?.tw}>
                <Icon className="fa-brands fa-linkedin-in media_icons"></Icon>
            </SocialText>
        </SocialMediaLink>
    </SocialMobile>
  )
}
