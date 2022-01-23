import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: var(--yellow-color);
    color: var(--white-color);
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const HomeLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
`
export const HomeTitle = styled.h1`
    font-size: var(--title-size);
    max-width: 455px;
    margin-bottom: 3rem;
    margin-top: 4.5rem;

    span {
        color: var(--blue-color);
    }

    @media screen and (max-width: 1200px){
        text-align: center;
        margin-bottom: 2rem;
    }
`
export const HomeButton = styled(Link)`
    display: flex;
    font-size: clamp(1rem, 5vw, 1.5rem);
    padding: 0.5rem 2rem;
    background-color: transparent;
    border: 2px solid var(--white-color);
    border-radius: 4px;
    color: var(--white-color);
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    transition: 0.3s ease-in-out;

    :hover {
        background-color: var(--white-color);
        color: var(--blue-color);
    }
`
export const HomeRight = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 5rem;
    margin-bottom: 5rem;
`
export const HomeImg = styled.img`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: clamp(-5rem, 5vw,6rem);

    @media screen and (max-width: 1200px){
        margin-top: -5rem;
    }
    @media screen and (max-width: 750px){
        max-width: 500px;
    }
    @media screen and (max-width: 520px){
        max-width: 380px;
    }
    @media screen and (max-width: 400px){
        max-width: 300px;
    }
`