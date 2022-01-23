import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    BarWrapper,
    NavLogo,
    SidebarMenu,
    SidebarWrapper,
    SideBtnWrap,
    SidebarLink,
    SideBtnLogin,
    SideBtnSignup
} from './SidebarElements';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <BarWrapper>
            <Link to="/">
            <NavLogo src={logo} alt="logo" />
            </Link>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            </BarWrapper>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                    to='payment'>Payment</SidebarLink>
                    <SidebarLink 
                    to='invoicing'>Invoicing</SidebarLink>
                    <SidebarLink to='transfer'>Transfer</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBtnLogin to='login'>Login</SideBtnLogin>
                    <SideBtnSignup to='register'>Register</SideBtnSignup>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
