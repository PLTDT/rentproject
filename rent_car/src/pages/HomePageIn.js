import React from 'react';
import PageHeaderIn from '../components/PageHeaderIn'; 
import Header from '../components/Header'; 
import FooterIn from '../components/FooterIn'; 
import Section1 from '../components/Section1'; 

const HomePageIn = () => {
    return (
        <div>
            <PageHeaderIn />
            <Header />
            <Section1 />
            <FooterIn />
        </div>
    )
}

export default HomePageIn;