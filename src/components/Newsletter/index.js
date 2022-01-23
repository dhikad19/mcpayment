import React from 'react';
import {
    NewsContainer,
    NewsText,
    NewsWrapper,
    NewsInput,
    NewsButton
} from './NewsletterElements';

const Newsletter = () => {
    return (
        <NewsContainer>
            <NewsText>Joins Our Newsletter to get more information</NewsText>
            <NewsWrapper>
                <NewsInput type="email" placeholder="Enter your email" />
                <NewsButton>Subscribe</NewsButton>
            </NewsWrapper>
        </NewsContainer>
    )
};

export default Newsletter;
