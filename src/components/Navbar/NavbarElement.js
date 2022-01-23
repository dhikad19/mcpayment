import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav `
    background: ${({scrollNav}) => (scrollNav ? 'var(--white-color);' : '#ffffff9d;')};
    height: 70px;
    width: 100%;
    display: flex;
    margin-top: -70px;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 99;
    transition: 1s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1400px;
`

export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50px;
    width: 100px;
    display: flex;
    margin-top: 10px;
`

export const NavMobile = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        color: var(--blue-color);
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin-right: -11px;
        transform: translate(-100%, 60%);
        font-size: 2.2rem;
        margin-top: -9px;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: center;
    gap: 5px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 70px;
`;

export const NavLinks = styled(LinkRouter)`
    color: var(--blue-color);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 18px;
    border-bottom: 3px solid transparent;

    &.active {
        border-bottom: 3px solid var(--blue-color);
    }

    &:hover {
        color: var(--light-blue-color);
        border-bottom: 3px solid var(--blue-color);
    }
`
export const NavLinks2 = styled(LinkRouter)`
    color: var(--blue-color);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 18px;
    border-bottom: 3px solid transparent;

    &.active {
        border-bottom: 3px solid var(--blue-color);
    }

    &:hover {
        color: var(--light-blue-color);
        border-bottom: 3px solid var(--blue-color);
    }
`

export const NavBtnLogin = styled(LinkRouter)`
    border-radius: 4px;
    background: var(--blue-color);
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--white-color);
    font-size: 18px;
    outline: none;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    align-items: center;
    margin-right: 20px;
    margin-left: 8px;

    &:hover {
        background-color: transparent;
        border: 2px solid var(--light-blue-color);
        color: var(--light-blue-color);
    }
`
export const NavBtnRegister = styled(LinkRouter)`
    border-radius: 4px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--blue-color);
    font-size: 18px;
    outline: none;
    border: 2px solid var(--blue-color);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    align-items: center;

    &:hover {
        color: var(--white-color);
        border: 2px solid transparent;
        background-color: var(--blue-color);
    }
`