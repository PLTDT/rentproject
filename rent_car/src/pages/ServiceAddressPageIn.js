import React from 'react';
import PageHeaderIn from '../components/PageHeaderIn'; 
import FooterIn from '../components/FooterIn'; 
import ServiceAddress from '../components/ServiceAddress';

const ServiceAddressPageIn = () => {
    return (
        <div>
            <PageHeaderIn />
            <ServiceAddress />
            <FooterIn />
        </div>
    )
}

export default ServiceAddressPageIn;