import styled from "styled-components"
import {IoLogoGoogle, IoLogoFacebook} from 'react-icons/io5';

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f2f5f6;
`
export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white-color);
    padding: 3rem 6rem;
    margin-top: 9rem;
    max-width: 515px;

    @media screen and (max-width: 520px){
        max-width: 350px;
        padding: 2rem 1rem;
    }
`
export const RegisterTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    @media screen and (max-width: 520px){
        flex-direction: column;
    }
`
export const FacebookLogo = styled(IoLogoFacebook)`
    margin-right: 4px;
`
export const GoogleLogo = styled(IoLogoGoogle)`
    margin-right: 4px;
`
export const TopText = styled.h3`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 520px){
        margin-bottom: 15px;
    }
`
export const TopLink = styled.p`
    justify-content: flex-end;
    font-weight: 400;
    text-decoration: none;

    @media screen and (max-width: 520px){
        text-align: center;
    }
`
export const RegisterCenter = styled.div`
    display: flex;
    flex-direction: column;
`
export const RegisterInput = styled.input`
    margin-bottom: 1.5rem;
    height: 50px;
    width: 100%;
    outline: none;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid grey;
    background-color: var (--white-color);
`
export const RegisterButton = styled.button`
    background-color: var(--blue-color);
    color: var(--white-color);
    padding: 1rem 1.6rem;
    font-size: 20px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 1.5rem;
`
export const CenterLink = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`
export const CenterTextLink = styled.div`
    cursor: pointer;

    &:hover{
            color: var(--dark-blue-color);
            transition: 0.5s ease;
        }
`
export const RegisterH2 = styled.h4`
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid grey; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
    color: grey;
`
export const RegisterSpan = styled.span`
    background:#fff; 
    padding:0 10px; 
`
export const RegisterBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const ButtonFb = styled.button`
    border: none;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    background-color: #3b5998;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    color: var(--white-color);
    padding: 0.5rem 1.6rem;
    display: flex;
    margin-top: 1.5rem;
`
export const ButtonGoogle = styled.button`
    border: 1px solid grey;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    background-color: var(--white-color);
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    color: var(--dark-color);
    padding: 0.5rem 1.6rem;
    display: flex;
    margin-top: 1.5rem;
`
export const ButtonBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`
export const ButtonImg = styled.img`
    width: 40px;
    height: 40px;
`
export const BottomCredit = styled.div`

`
export const BottomText = styled.p`
    margin-top: 1.5rem;
    max-width: 500px;
`
export const Label = styled.label`
    border-radius: 50%;

    @media screen and (max-width: 520px){
        font-size: 11px;
    }
`
export const Submit = styled.input`
    margin-bottom: 8rem;
    margin-top: -1.5rem;
`
