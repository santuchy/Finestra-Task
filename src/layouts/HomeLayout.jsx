import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import TrustedBy from '../components/trustedby/TrustedBy';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <TrustedBy></TrustedBy>
        </div>
    );
};

export default HomeLayout;