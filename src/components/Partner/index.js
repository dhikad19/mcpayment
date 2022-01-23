import React from 'react';
import {
    PartnerContainer,
    TopPartner,
    TopTitle,
    TopDsc,
    BottomPartner,
    PartnerImg
} from './PartnerElements';
import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.png';
import partner3 from '../../assets/partner3.png';
import partner4 from '../../assets/partner4.png';
import partner5 from '../../assets/partner5.png';
import partner6 from '../../assets/partner6.png';

const Partner = () => {
    return (
        <PartnerContainer id="lab">
            <TopPartner>
                <TopTitle>Partners</TopTitle>
                <TopDsc>MC Payment cooperates and fully supports Indonesia's tourism, hospitality and eCommerce industries.</TopDsc>
            </TopPartner>
            <BottomPartner>
                <PartnerImg src={partner1} alt="partner1" />
                <PartnerImg src={partner2} alt="partner2" />
                <PartnerImg src={partner3} alt="partner3" />
                <PartnerImg src={partner4} alt="partner4" />
                <PartnerImg src={partner5} alt="partner5" />
                <PartnerImg src={partner6} alt="partner6" />
            </BottomPartner>
        </PartnerContainer>
    )
}

export default Partner
