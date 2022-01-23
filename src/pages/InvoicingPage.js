import React from 'react';
import { dataObjectOne } from '../components/Data';
import Invoicing from '../components/Invoicing';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const InvoicingPage = () => {
    return (
        <>
            <title>MC Payment | Invoicing</title>
            <Invoicing {...dataObjectOne} />
            <Newsletter />
            <Footer />
        </>
    )
}

export default InvoicingPage
