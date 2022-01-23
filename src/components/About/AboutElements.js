import styled from 'styled-components';
import {BsFillTelephoneFill} from 'react-icons/bs';

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--light-blue-color);
`
export const AboutTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    margin-top: 10rem;
    margin-bottom: 3rem;
    color: var(--blue-color);
    flex-wrap: wrap;
    padding: 2rem;
`
export const AboutLeft = styled.div`

`
export const AboutLogo = styled.img`
    width: 35vw;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    position: relative;
`
export const AboutRight = styled.div`

`
export const AboutTitle = styled.h1`
    font-size: var(--title-size);
    color: var(--yellow-color);
`
export const AboutDsc = styled.p`
    color: var(--white-color);
    max-width: 550px;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    
`
export const AboutBottom = styled.div`
    margin-top: 8rem;
    margin-bottom: 8rem;
    color: var(--white-color);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`
export const BottomLeft = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
`
export const BottomRight = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
`
export const BottomList = styled.li`
    list-style: none;
    display: flex;
`
export const BottomImg = styled.img`
    display: flex;
    background-size: cover;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    margin-bottom: 2rem;
`
export const BottomContent = styled.div`
    display: flex;
    flex-direction: column;
    text-decoration: none;
`
export const BottomText = styled.p`
    max-width: 240px;
    margin-bottom: 10px;
`
export const BottomLink = styled.a`
    cursor: pointer;
    color: var(--white-color);
    text-decoration: none;
    transition: 0.3 ease;

    :hover{
        color: var(--red-color);
    }
`
export const TelIcon = styled(BsFillTelephoneFill)`
    margin-right: 5px;
`