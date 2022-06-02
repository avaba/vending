import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {IDashboardData} from "../../store/dashboard";

interface IDashboardFormProps {
    data: IDashboardData,
    action: (n: number) => void
}

const DashboardForm = ({data, action}: IDashboardFormProps) => {
    const [input, setInput] = useState(data.value)

    useEffect(() => {
        setInput(data.value)
    }, [data.value])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = !e.target.value ? 0 : +e.target.value
        setInput(value)
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        action(+input)
    }

    return (
        <form onSubmit={handleFormSubmit} className="dashboard-form">
            <label className="dashboard-form__label">{data.label}</label>
            <input className="dashboard-form__input"
                   name={data.type}
                   type="number"
                   placeholder="..."
                   onChange={(e) => onChange(e)}
                   value={!input ? "" : input}
                   disabled={data.disabled}
            />
            <button disabled={data.disabled} className="dashboard-form__btn">Insert</button>
        </form>
    );
};

export default DashboardForm;