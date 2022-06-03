import React, {useCallback, useState} from 'react';
import DisplayItem from "../Display/DisplayItem";
import gif from "../../assets/img/success.gif";
import {dashboardState, resetDashboard} from "../../store/dashboard";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";

const DashboardFooter = () => {
    const dashboard = useAppSelector(dashboardState)
    const {coinsResult, change, product} = dashboard
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const openGif = useCallback(() => {
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 6000)
    }, [])

    const resetVending = useCallback(() => {
        dispatch(resetDashboard())
        openGif()
    }, [])

    return (
        <div className="dashboard__footer">
            <div className="dashboard-coins">
                {Boolean(change) && <p>Change: {change}</p>}
                {coinsResult.map((item, index) => (
                    <p key={index}>{item.value}₽: {item.count} coins</p>
                ))}
            </div>
            <div className="dashboard-product">
                {product && <div onClick={resetVending}><DisplayItem item={product}/></div>}
            </div>

            {open && (
                <div className="dashboard__success">
                    <img src={gif} alt=""/>
                </div>
            )}
        </div>
    );
};

export default DashboardFooter;