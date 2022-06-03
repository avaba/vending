import React from 'react';
import {useAppSelector} from "../../hooks/useRedux";
import {dashboardStateCash} from "../../store/dashboard";
import {IDisplayItem} from "../../service/displayList";

interface Props {
    item: IDisplayItem
}

const DisplayItem = ({item}: Props) => {
    const {price, name, category, id} = item
    const cash = useAppSelector(dashboardStateCash)

    return (
        <div className={price <= cash ? "display-item display-item--active" : "display-item"}>
            <h3 className="display-item__title">{name}</h3>
            <p>{category}</p>
            <div className="display-item__footer">
                <p>{price}₽</p>
                <p className="display-item__footer--id">{id}</p>
            </div>
        </div>
    );
};

export default DisplayItem;