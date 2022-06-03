import React from 'react';
import './Dashboard.scss';
import DashboardFooter from './DashboardFooter';
import DashboardInsert from "./DashboardInsert";
import DashboardChoose from "./DashboardChoose";
import {useAppSelector} from "../../hooks/useRedux";
import {dashboardState} from "../../store/dashboard";

const Dashboard = () => {
    const dashboard = useAppSelector(dashboardState)
    const {banknotes, coins} = dashboard

    return (
        <div className="dashboard">
            <DashboardInsert/>
            <p className="dashboard__desc">
                Available banknotes:
                {banknotes.map((item, index, array) => (
                    <span key={item + index}>{index !== (array.length - 1) ? `${item}, ` : ` or ${item}`}</span>
                ))}₽. <br/>
                The machine gives change in
                {coins.map((item, index, array) => (
                    <span key={item + index}>{index !== (array.length - 1) ? `${item}, ` : ` and ${item}`}</span>
                ))}₽ coins.
            </p>
            <DashboardChoose/>
            <DashboardFooter/>
        </div>
    )
};

export default Dashboard;