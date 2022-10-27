import React from 'react'
import { HeaderText } from '../../styles/Fonts'
import { SocialMediaMobile } from '../SocialMedia/SocialMediaMobile'
import { MenuDivisionOne, MenuDivisionTwo, MenuIcon, MenuLink, MenuLinkText, MenuNavBody, MenuNavHeading, MenuSocialLink, MenuStyle, SectionOne, SectionTwo, SocialLinkContainer } from './Style';
import { pageLinks } from '../../pages/api/manifest';
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
                    <MenuIcon className=''></MenuIcon>
                  </SocialLinkContainer>
               </MenuSocialLink>
            </SectionOne>
            <SectionTwo>
               <MenuIcon onClick={MenuProps?.switchMenu} className='fa-solid fa-xmark'></MenuIcon>
            </SectionTwo>
        </MenuDivisionTwo>
    </MenuStyle>
  )
}
