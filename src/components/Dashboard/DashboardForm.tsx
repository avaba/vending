import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {IDashboardData} from "../../store/dashboard";

interface Props {
    data: IDashboardData,
    action: (n: number) => void
}

const DashboardForm = ({data, action}: Props) => {
    const {type, label, disabled} = data
    const [input, setInput] = useState(data.value)

    useEffect(() => {
        setInput(data.value)
    }, [data.value])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = !e.target.value ? 0 : Number(e.target.value)
        setInput(value)
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        action(Number(+input))
    }

    return (
        <form onSubmit={handleFormSubmit} className="dashboard-form">
            <label className="dashboard-form__label">{label}</label>
            <input className="dashboard-form__input"
                   name={type}
                   type="number"
                   placeholder="..."
                   onChange={(e) => onChange(e)}
                   value={!input ? "" : input}
                   disabled={disabled}
            />
            <button disabled={disabled} className="dashboard-form__btn">Insert</button>
        </form>
    );
};

export default DashboardForm;