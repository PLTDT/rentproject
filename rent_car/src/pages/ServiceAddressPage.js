import React from 'react';
import PageHeader from '../components/PageHeader'; 
import Footer from '../components/Footer'; 
import ServiceAddress from '../components/ServiceAddress';

const ServiceAddressPage = () => {
    return (
        <div>
            <PageHeader />
            <ServiceAddress />
            <Footer />
        </div>
    )
}

export default ServiceAddressPage;