import React from "react";
import PageHeaderIn from "./PageHeaderIn";
import FooterIn from "./FooterIn";
import { useLocation } from 'react-router-dom';

const Pay = () => {
    const location = useLocation();
    const { rowData } = location.state;

    return (
        <div>
            <PageHeaderIn />
            <pre>{JSON.stringify(rowData, null, 2)}</pre>
            <FooterIn />
        </div>
    );
};

export default Pay;
