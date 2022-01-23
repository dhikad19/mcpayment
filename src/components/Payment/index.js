import React from 'react';
import img1 from '../../assets/card1.svg';
import img2 from '../../assets/card2.svg';
import img3 from '../../assets/card3.svg';
import { 
    PaymentContainer,
    PaymentWrapper, 
    PaymentH1, 
    PaymentH2, 
    PaymentP, 
    PaymentCard, 
    PaymentIcon,
    PaymentSubtitle,
    PaymentContent,
    } from './PaymentElements';

const Payment = () => {
    return (
            <PaymentContainer id="payment">
                <PaymentContent>
                    <PaymentH1>Online Payment</PaymentH1>
                    <PaymentSubtitle>
                        We Provide a suitable display and
                        easy to integrate with your website/mobile application
                        for a better payment experience.
                    </PaymentSubtitle>
                </PaymentContent>
                <PaymentWrapper>
                        <PaymentCard>
                            <PaymentIcon src={img1} />
                            <PaymentH2>Local and Global Payment</PaymentH2>
                            <PaymentP>Accept online payments from credit/debit cards from all banks, Preferred and trusted partner</PaymentP>
                        </PaymentCard>
                    <PaymentCard>
                        <PaymentIcon src={img2} />
                        <PaymentH2>Monitor Orders and Transactions</PaymentH2>
                        <PaymentP>Through our merchant administration portal, you can monitor transactions and invoices in real-time.</PaymentP>
                    </PaymentCard>
                    <PaymentCard>
                        <PaymentIcon src={img3} />
                        <PaymentH2>Secured Payment</PaymentH2>
                        <PaymentP>Whatever the payment method. With PCIDSS certification standards and ongoing transaction security efforts.</PaymentP>
                    </PaymentCard>
                </PaymentWrapper>
            </PaymentContainer>

    )
}

export default Payment;