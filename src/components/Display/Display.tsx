import React from 'react';
import './Display.scss'
import DisplayItem from "./DisplayItem";
import {displayList} from "../../service/displayList";

const Display = () => {
    return (
        <div className="display">
            {displayList.map(item => <DisplayItem key={item.id} item={item}/>)}
        </div>
    );
};

export default Display;