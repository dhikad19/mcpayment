import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import {FaBars} from 'react-icons/fa';
import {
        Nav,
        NavbarContainer,
        NavLogo,
        NavMobile,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtnLogin,
        NavBtnRegister
    } from './NavbarElement';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 70) {
            setScrollNav(true)
        } else {
            setScrollNav(false) 
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[]);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <Link to="/">
                    <NavLogo
                    src={logo}
                    alt="logo"
                    />
                    </Link>
                    <NavMobile onClick={toggle}>
                        <FaBars />
                    </NavMobile>
                        <NavMenu>
                        <NavItem>
                            <NavLinks
                            to='payment'
                            >Payment</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            to='invoicing'
                            >Invoicing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            to='transfer'
                            >Transfer</NavLinks>
                        </NavItem>
                            <NavBtnLogin to='login'>Login</NavBtnLogin>
                            <NavBtnRegister to='register'>Register</NavBtnRegister>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
