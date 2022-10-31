import React from 'react'
import { HeaderText } from '../../styles/Fonts'
import { SocialMediaMobile } from '../SocialMedia/SocialMediaMobile'
import { MenuDivisionOne, MenuDivisionTwo, MenuIcon, MenuLink, MenuLinkAdd, MenuLinkText, MenuNavBody, MenuNavHeading, MenuSocialLink, MenuStyle, NavClose, SectionOne, SectionTwo, SocialLinkContainer } from './Style';
import { pageLinks,Manifest } from '../../pages/api/manifest';
import { pageLink } from '../../pages/api/interface';

export interface MenuProps {
    switchMenu: () => void

}

export const Menu: React.FC<MenuProps> = (MenuProps) => {
  return (
    <MenuStyle>
        <MenuDivisionOne></MenuDivisionOne>
        <MenuDivisionTwo>
            <SectionOne>
               <MenuNavHeading>
                  <h4>NAVIGATE TO</h4>
               </MenuNavHeading>
               <MenuNavBody>

                {pageLinks.map((link:pageLink,index:number)=> 
                    <MenuLinkText key={index}>
                        <MenuLink  href={`/${link?.linkAddress}`}>  
                            {link?.linkName}
                        </MenuLink> 
                    </MenuLinkText>
                )}
                 
               </MenuNavBody>
               <MenuSocialLink>
                  <SocialLinkContainer>
                    <MenuLinkAdd href={Manifest?.socialLinks?.tw}>
                      <MenuIcon className='fa-brands fa-twitter desktop_icons'></MenuIcon>
                    </MenuLinkAdd>
                  </SocialLinkContainer>
                  <SocialLinkContainer>
                    <MenuLinkAdd href={Manifest?.socialLinks?.github}>
                      <MenuIcon className='fa-brands fa-github  desktop_icons'></MenuIcon>
                    </MenuLinkAdd>
                  </SocialLinkContainer>
                  <SocialLinkContainer>
                    <MenuLinkAdd className={Manifest?.socialLinks?.medium}>
                      <MenuIcon className='fa-brands fa-medium desktop_icons'></MenuIcon>
                    </MenuLinkAdd> 
                  </SocialLinkContainer>
                  <SocialLinkContainer>
                    <MenuLinkAdd className={Manifest?.socialLinks?.in}>
                      <MenuIcon className='fa-brands fa-linkedin-in desktop_icons'></MenuIcon>
                    </MenuLinkAdd>
                  </SocialLinkContainer>
               </MenuSocialLink>
            </SectionOne>
            <SectionTwo>
               <NavClose onClick={MenuProps?.switchMenu} className='fa-solid fa-xmark'></NavClose>
            </SectionTwo>
        </MenuDivisionTwo>
    </MenuStyle>
  )
}
