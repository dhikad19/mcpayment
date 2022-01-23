import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaTwitter, FaGooglePlus } from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md';
import {FooterContainer, 
        FooterLinks, 
        FooterWrap, 
        FooterLinksItems, 
        FooterLinksWrapper, 
        FooterLinksContainer, 
        FooterLinksTitle, 
        SocialIconsLink, 
        SocialIcons,
        SocialLogo,
        SocialMedia,
        SocialMediaWrap, 
        WebsiteRight,
        FooterStyle
        } from './FooterElements';
import logo from '../../assets/logo.png';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>Security</FooterLinksTitle>
                                <FooterLinks to="/">PCI DSS</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Legal</FooterLinksTitle>
                                <FooterLinks to="/">Privacy Policy ID/EN</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>Company</FooterLinksTitle>
                                <FooterLinks to="/">About</FooterLinks>
                                <FooterLinks to="/">MC Payment HQ</FooterLinks>
                                <FooterLinks to="/">Contact Us</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Products</FooterLinksTitle>
                                <FooterLinks to="/">Online Payment</FooterLinks>
                                <FooterLinks to="/">Online Invoicing</FooterLinks>
                                <FooterLinks to="/">Terminal Payment</FooterLinks>
                                <FooterLinks to="/">Cash Payment</FooterLinks>
                                <FooterLinks to="/">Bank Transfer</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} src={logo} alt='logo' />
                        <WebsiteRight><FooterStyle>MCP</FooterStyle> © {new Date().getFullYear()} All rights reserved.</WebsiteRight>
                        <SocialIcons>
                            <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Google">
                                <FaGooglePlus />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Feed">
                                <MdRssFeed />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
