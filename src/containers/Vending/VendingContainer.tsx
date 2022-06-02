import React from 'react';
import Display from "../../components/Display/Display";
import Dashboard from "../../components/Dashboard/Dashboard";
import './Vending.scss';

const VendingContainer = () => {
    return (
        <div className="vending">
            <Display/>
            <Dashboard/>
        </div>
    );
};

export default VendingContainer;