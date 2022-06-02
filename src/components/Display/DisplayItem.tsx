import React from 'react';
import {IDisplayItem} from "../../store/display";

interface IDisplayItemProps {
    item: IDisplayItem
}

const DisplayItem = ({item}: IDisplayItemProps) => {
    return (
        <div className={item.active ? "display-item display-item--active" : "display-item"}>
            <h3 className="display-item__title">{item.name}</h3>
            <p>{item.category}</p>
            <div className="display-item__footer">
                <p>{item.price}₽</p>
                <p className="display-item__footer--id">{item.id}</p>
            </div>
        </div>
    );
};

export default DisplayItem;