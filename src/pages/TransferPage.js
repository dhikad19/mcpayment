import React from 'react';
import { dataObjectTwo } from '../components/Data';
import Transfer from '../components/Transfer';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const TransferPage = () => {
    return (
        <>
            <title>MC Payment | Transfer</title>
            <Transfer {...dataObjectTwo} />
            <Newsletter />
            <Footer />
        </>
    )
}

export default TransferPage
