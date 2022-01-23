import styled from "styled-components"

export const NewsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 10rem;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-color);
    color: var(--white-color);
`
export const NewsText = styled.h3`
    margin-right: 30px;
    letter-spacing: 0.5px;
    font-size: 20px;

    @media screen and (max-width: 430px) {
        font-size: 15px;
    }
`
export const NewsWrapper = styled.div`
    display: flex;
    height: 60px;
    position: relative;
    align-items: center;
    justify-content: center;
`
export const NewsInput = styled.input`
    align-items: center;
    justify-content: center;
    display: flex;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 0 20px;
    height: 60px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    @media screen and (max-width: 750px){
        font-size: 15px;
        height: 40px;
    }
`
export const NewsButton = styled.button`
    border: none;
    background-color: var(--red-color);
    color: var(--white-color);
    font-size: 20px;
    padding: 0 20px;
    height: 60px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;

    @media screen and (max-width: 750px){
        font-size: 15px;
        height: 40px;
    }
`