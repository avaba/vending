import React, {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {chooseError, chooseUpdateLabel, onChoose} from "../../store/dashboard";
import {displayList, IDisplayItem} from "../../service/displayList";
import DashboardForm from "./DashboardForm";
import {RootState} from "../../store";

const getCash = (state: RootState) => state.dashboard.cash
const getChoose = (state: RootState) => state.dashboard.choose

const DashboardChoose = () => {
    const cash = useAppSelector(getCash)
    const choose = useAppSelector(getChoose)
    const {error, attempt} = choose
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (error) {
            setTimeout(() => dispatch(chooseUpdateLabel()), 1000)
        }
    }, [attempt])

    const chooseDispatch = useCallback((n: number) => {
        const arrActive: Array<IDisplayItem> = displayList.filter(item => (item.id === n) && (item.price <= cash))
        arrActive.length ? dispatch(onChoose(arrActive[0])) : dispatch(chooseError())
    }, [cash])

    return (
        <DashboardForm
            data={choose}
            action={chooseDispatch}
        />
    );
};

export default DashboardChoose;