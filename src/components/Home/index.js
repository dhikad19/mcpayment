import React from 'react';
import banner from '../../assets/banner.svg';
import {
    HomeContainer,
    HomeLeft,
    HomeTitle,
    HomeButton,
    HomeRight,
    HomeImg
} from './HomeElements'

const Home = () => {

    return (
        <HomeContainer>
            <HomeLeft>
                <HomeTitle>Improving Local Business With <span>Better Payment</span></HomeTitle>
                <HomeButton to='/about'>More</HomeButton>
            </HomeLeft>
            <HomeRight> 
                <HomeImg src={banner} alt='banner' />
            </HomeRight>
        </HomeContainer>
    )
};

export default Home;