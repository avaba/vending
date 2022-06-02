import React, {useEffect, useState} from 'react';
import './Dashboard.scss';
import DashboardForm from "./DashboardForm";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {
    chooseError,
    chooseUpdateLabel,
    insertUpdateLabel,
    onChoose,
    onInsert,
    resetDashboard
} from "../../store/dashboard";
import {filterDisplay} from "../../store/display";
import DashboardCoins from "./DashboardCoins";
import DisplayItem from "../Display/DisplayItem";
import gif from "../../assets/img/success.gif"

const Dashboard = () => {
    const dashboard = useAppSelector(state => state.dashboard)
    const list = useAppSelector(state => state.display.list)
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (dashboard.insert.error) {
            setTimeout(() => {
                dispatch(insertUpdateLabel())
            }, 1000)
        } else {
            dispatch(filterDisplay(dashboard.cash))
        }
    }, [dashboard.insert.attempt])

    useEffect(() => {
        if (dashboard.choose.error) {
            setTimeout(() => {
                dispatch(chooseUpdateLabel())
            }, 1000)
        }
    }, [dashboard.choose.attempt])

    const banknotesRender = () => {
        return dashboard.banknotes.map((item, index, array) => (
            <span key={item + index}>{index !== (array.length - 1) ? `${item}, ` : ` or ${item}`}</span>
        ))
    }

    const coinsRender = () => {
        return dashboard.coins.map((item, index, array) => (
            <span key={item + index}>{index !== (array.length - 1) ? `${item}, ` : ` and ${item}`}</span>
        ))
    }

    const insertDispatch = (n: number) => {
        dispatch(onInsert(n))
    }

    const chooseDispatch = (n: number) => {
        const arrActive = list.filter(item => item.active && item.id === n)

        arrActive.length ?
            arrActive.map(item => item.id === n && dispatch(onChoose(item))) :
            dispatch(chooseError())
    }

    const openGif = () => {
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 6000)
    }

    const resetVending = () => {
        dispatch(resetDashboard())
        dispatch(filterDisplay(0))
        openGif()
    }

    return (
        <div className="dashboard">
            <DashboardForm
                data={dashboard.insert}
                action={insertDispatch}
            />

            <p className="dashboard__desc">
                Available banknotes: {banknotesRender()}₽. <br/>
                The machine gives change in {coinsRender()}₽ coins.</p>

            <DashboardForm
                data={dashboard.choose}
                action={chooseDispatch}
            />

            <div className="dashboard__footer">
                <DashboardCoins result={dashboard.coinsResult} change={dashboard.change}/>
                <div className="dashboard-product">
                    {dashboard.product && <div onClick={resetVending}><DisplayItem item={dashboard.product}/></div>}
                </div>
            </div>

            {open && (
                <div className="dashboard__success">
                    <img src={gif} alt=""/>
                </div>
            )}
        </div>
    )
};

export default Dashboard;