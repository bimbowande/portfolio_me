import React from 'react';
import { MenuDivisionOne, MenuDivisionTwo, MenuIcon, MenuLink, MenuLinkAdd, MenuLinkText, MenuNavBody, MenuNavHeading, MenuSocialLink, MenuStyle, NavClose, SectionOne, SectionTwo, SocialLinkContainer } from './Style';
import { pageLinks,Manifest } from '../../pages/api/manifest';
import { pageLink,socialLinksI } from '../../pages/api/interface';
import Link from 'next/link';

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
                        <Link  href={`./${link?.linkAddress}`}>  
                           <MenuLink> {link?.linkName}</MenuLink>
                        </Link> 
                    </MenuLinkText>
                )}
                 
               </MenuNavBody>
               <MenuSocialLink>

                    {Manifest?.socialLinks.map((LinkObj:socialLinksI,index:number)=>
                      <SocialLinkContainer key={index}>
                      <MenuLinkAdd href={LinkObj?.link}>
                      <MenuIcon className={`fa-brands ${LinkObj?.class} desktop_icons`}></MenuIcon>
                    </MenuLinkAdd>
                    </SocialLinkContainer>
                    )}
         
               </MenuSocialLink>
            </SectionOne>
            <SectionTwo>
               <NavClose onClick={MenuProps?.switchMenu} className='fa-solid fa-xmark'></NavClose>
            </SectionTwo>
        </MenuDivisionTwo>
    </MenuStyle>
  )
}
