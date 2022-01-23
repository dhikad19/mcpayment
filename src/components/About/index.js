import React from 'react';
import logo from '../../assets/logo.png';
import {
    AboutContainer,
    AboutTop,
    AboutLeft,
    AboutLogo,
    AboutRight,
    AboutTitle,
    AboutDsc,
    AboutBottom,
    BottomLeft,
    BottomRight,
    BottomList,
    BottomImg,
    BottomContent,
    BottomText,
    BottomLink,
    TelIcon
} from './AboutElements';
import singapore from '../../assets/flag1.png';
import hongkong from '../../assets/flag2.png';
import australia from '../../assets/flag3.png'
import indonesia from '../../assets/flag4.png';
import malaysia from '../../assets/flag5.png';
import thailand from '../../assets/flag6.png';

const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutTop>
                <AboutLeft>
                    <AboutLogo src={logo} alt="logo" />
                </AboutLeft>
                <AboutRight>
                    <AboutTitle>Who we are</AboutTitle>
                    <AboutDsc>
                    Since 2005, MC Payment has been working with banks and partners 
                    to serve the payment technology needs of suppliers, merchants, 
                    and consumers. We facilitate businesses to accept electronic 
                    payments that are tailored to technology and lifestyle trends.
                    <br/>
                    <br/>
                    Our payment solutions adapt to local payment complexities. 
                    In Indonesia, our mission is to provide the best payment services 
                    and support to local businesses. We are committed to continuously 
                    equipping and improving our products and services for the success of our clients.
                    </AboutDsc>
                </AboutRight>
            </AboutTop>
            <AboutBottom>
                <AboutTitle>Our Offices</AboutTitle>
                <BottomLeft>
                    <BottomList>
                        <BottomImg src={singapore} alt='singapore' />
                        <BottomContent>
                        <BottomText>Operations Office: 10 Ubi Crescent, #05-05 Ubi Techpark</BottomText>
                        <BottomLink href='tel:+65 6299 0030'><TelIcon /> +65 6299 0030</BottomLink>
                        </BottomContent>
                    </BottomList>
                    <BottomList>
                        <BottomImg src={hongkong} alt='hongkong' />
                        <BottomContent>
                        <BottomText>Flat 2A, Cheung Wah Ind. Bldg., 10-12 Shipyard Lane, Quarry Bay</BottomText>
                        <BottomLink href='tel:+852 8108 8020'><TelIcon /> +852 8108 8020</BottomLink>
                        </BottomContent>
                    </BottomList>
                    <BottomList>
                        <BottomImg src={australia} alt='australia' />
                        <BottomContent>
                        <BottomText>Level 24, 52 Martin Place Sydney, NSW 2000</BottomText>
                        </BottomContent>
                    </BottomList>
                </BottomLeft>
                <BottomRight>
                    <BottomList>
                        <BottomImg src={indonesia} alt='indonesia' />
                        <BottomContent>
                        <BottomText>Jl. Warung Jati Barat 8A Kalibata, Pancoran Jakarta Selatan 12740</BottomText>
                        <BottomLink href='tel:+62 21 5098 6108'><TelIcon /> +62 021 5098 6108</BottomLink>
                        </BottomContent>
                    </BottomList>
                    <BottomList>
                        <BottomImg src={malaysia} alt='malaysia' />
                        <BottomContent>
                        <BottomText>D1-3A-05, Solaris Dutamas No 1, Jalan Dutamas 1, Malaysia 50480</BottomText>
                        <BottomLink href='tel:+60 3 6205 30150'><TelIcon /> +60 3 6205 30150</BottomLink>
                        </BottomContent>
                    </BottomList>
                    <BottomList>
                        <BottomImg src={thailand} alt='thailand' />
                        <BottomContent>
                        <BottomText>399 Sukhumvit Road, North Khlong Toei, Wattana, Bangkok,</BottomText>
                        <BottomLink href='tel:+66 2 052 1555'><TelIcon /> +66 2 052 1555</BottomLink>
                        </BottomContent>
                    </BottomList>
                </BottomRight>
            </AboutBottom>
        </AboutContainer>
    )
}

export default About
