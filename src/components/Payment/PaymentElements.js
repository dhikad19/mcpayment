import styled from 'styled-components'

export const PaymentContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--blue-color);

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const PaymentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        padding: 0 35px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }    
`;

export const PaymentCard = styled.div` 
    background: var(--white-color);
    color: var(--blue-color);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const PaymentIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px
`

export const PaymentH1 = styled.h1`
    font-size: var(--title-size);
    color: var(--white-color);
    max-width: 600px;
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const PaymentH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const PaymentP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const PaymentSubtitle = styled.p`
    margin-top: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    text-align: center;
    max-width: 500px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        max-width: 350px;
    }
`

export const PaymentContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    max-width: 900px;
    position: relative;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
        max-width: 700px;
    }
`