import React from 'react';
import './Display.scss'
import DisplayItem from "./DisplayItem";
import {useAppSelector} from "../../hooks/useRedux";

const Display = () => {
    const display = useAppSelector((state) => state.display)

    return (
        <div className="display">
            {display.list.map(item => <DisplayItem key={item.id} item={item}/>)}
        </div>
    );
};

export default Display;