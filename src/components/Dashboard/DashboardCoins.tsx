import React from 'react';
import {ICoinsResult} from "../../store/dashboard";

interface IDashboardCoins {
    result: Array<ICoinsResult>,
    change: number
}

const DashboardCoins = ({result, change}: IDashboardCoins) => {
    return (
        <div className="dashboard-coins">
            {!!change && <p>Change: {change}</p>}
            {result.map((item, index) => (
                <p key={index}>{item.value}₽: {item.count} coins</p>
            ))}
        </div>
    );
};

export default DashboardCoins;