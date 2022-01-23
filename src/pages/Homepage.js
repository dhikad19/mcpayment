import React from 'react';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Payment from '../components/Payment';
import Invoicing from '../components/Invoicing';
import { dataObjectOne, dataObjectTwo } from '../components/Data';
import Transfer from '../components/Transfer';
import Partner from '../components/Partner';

const Homepage = () => {
    return (
        <>
            <title>MC Payment | Payment Gateway</title>
            <Home />
            <Payment />
            <Invoicing {...dataObjectOne} />
            <Transfer {...dataObjectTwo} />
            <Partner />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Homepage
