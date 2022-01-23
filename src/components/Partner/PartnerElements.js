import styled from 'styled-components';

export const PartnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: var(--white-color);
    color: var(--blue-color);
`
export const TopPartner = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const TopTitle = styled.h2`
    font-size: 35px;
    margin-bottom: 20px;
    margin-top: 5rem;
    font-weight: 400px;

    @media screen and (max-width: 660px){
        font-size: 25px;
    }
`
export const TopDsc = styled.p`
    font-size: 25px;
    margin-bottom: 4rem;

    @media screen and (max-width: 660px){
        font-size: 18px;
    }
`
export const BottomPartner = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    justify-content: center;
`
export const PartnerImg = styled.img`
    height: 130px;
    width: 130px;
    margin-bottom: 5rem;
`