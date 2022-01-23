import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkRoute } from "react-router-dom";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: var(--white-color);
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #212529;
    font-size: 2.2rem;
`;

export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50px;
    width: 100px;
    display: flex;
    margin-left: 20px;
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    background: transparent;
    font-size: 3rem;
    cursor: pointer;
    outline: none;
    margin-right: 20px;
`;

export const BarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -60px;
`

export const SidebarWrapper = styled.div `
    color: #212529;
`;

export const SidebarMenu = styled.ul `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkRoute)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #212529;
    cursor: pointer;
`;

export const SideBtnWrap = styled.div `
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

export const SideBtnLogin = styled(LinkRoute)`
    border-radius: 4px;
    background: var(--blue-color);
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--white-color);
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    align-items: center;
    margin-right: 20px;
    margin-left: 8px;
`
export const SideBtnSignup = styled(LinkRoute)`
    border-radius: 4px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--blue-color);
    font-size: 18px;
    outline: none;
    border: 2px solid var(--blue-color);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    align-items: center;
`