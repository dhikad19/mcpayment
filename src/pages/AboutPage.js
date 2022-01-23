import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Partner from '../components/Partner';

const AboutPage = () => {
    return (
        <>
            <title>MC Payment | About</title>
            <About />
            <Partner />
            <Newsletter />
            <Footer />
        </>
    )
}

export default AboutPage;
