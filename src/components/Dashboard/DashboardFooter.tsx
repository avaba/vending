import React, {useCallback, useState} from 'react';
import DisplayItem from "../Display/DisplayItem";
import gif from "../../assets/img/success.gif";
import {resetDashboard} from "../../store/dashboard";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {RootState} from "../../store";

const getCoinsResult = (state: RootState) => state.dashboard.coinsResult
const getChange = (state: RootState) => state.dashboard.change
const getProduct = (state: RootState) => state.dashboard.product

const DashboardFooter = () => {
    const coinsResult = useAppSelector(getCoinsResult)
    const change = useAppSelector(getChange)
    const product = useAppSelector(getProduct)
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