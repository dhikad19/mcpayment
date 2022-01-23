import React from 'react';
import { InvoicingContainer,
        InvoicingWrapper, 
        InvoicingRow, 
        Column1, 
        Column2,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        ImgWrap, 
        Img
        } from './InvoicingElements';
import image1 from '../../assets/img1.svg';

const Invoicing = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, alt}) => {
    return (
        <>
            <InvoicingContainer lightBg={lightBg} id={id}>
                <InvoicingWrapper>
                    <InvoicingRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper> 
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={image1} alt={alt} />
                        </ImgWrap>
                        </Column2>
                    </InvoicingRow>
                </InvoicingWrapper>
            </InvoicingContainer>
        </>
    )
}

export default Invoicing;
