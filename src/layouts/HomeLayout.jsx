import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import TrustedBy from '../components/trustedby/TrustedBy';
import ManageSection from '../components/manageSection/ManageSection';
import FinanceSection from '../components/financeSection/FinanceSection';
import TestimonialsSection from '../components/testimonialSection/TestimonialsSection';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <TrustedBy></TrustedBy>
            <ManageSection></ManageSection>
            <FinanceSection></FinanceSection>
            <TestimonialsSection></TestimonialsSection>
        </div>
    );
};

export default HomeLayout;