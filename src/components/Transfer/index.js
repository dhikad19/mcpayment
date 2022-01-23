import React from 'react';
import { TransferContainer,
        TransferWrapper, 
        TransferRow, 
        Column1, 
        Column2,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        ImgWrap, 
        Img
        } from './TransferElements';
import image2 from '../../assets/img2.svg';

const Transfer = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, alt}) => {
    return (
        <>
            <TransferContainer lightBg={lightBg} id={id}>
                <TransferWrapper>
                    <TransferRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper> 
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={image2} alt={alt} />
                        </ImgWrap>
                        </Column2>
                    </TransferRow>
                </TransferWrapper>
            </TransferContainer>
        </>
    )
}

export default Transfer;
