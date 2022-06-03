import React, {useCallback, useEffect} from 'react';
import {insertUpdateLabel, onInsert} from "../../store/dashboard";
import DashboardForm from "./DashboardForm";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {RootState} from "../../store";

const getInsert = (state: RootState) => state.dashboard.insert

const DashboardInsert = () => {
    const insert = useAppSelector(getInsert)
    const {error, attempt} = insert
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (error) {
            setTimeout(() => dispatch(insertUpdateLabel()), 1000)
        }
    }, [attempt])

    const insertDispatch = useCallback((n: number) => {
        dispatch(onInsert(n))
    }, [])

    return (
        <DashboardForm
            data={insert}
            action={insertDispatch}
        />
    );
};

export default DashboardInsert;