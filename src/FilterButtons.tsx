import React from 'react';
import {FilterValuesType} from "./App";

type FilterButtonsPropsType = {
    changeFilter: (value: FilterValuesType) => void,
    filter: string
}

export const FilterButtons = (props: FilterButtonsPropsType) => {
    const onAllClickHandler = () => props.changeFilter("all")
    const onActiveClickHandler = () => props.changeFilter("active")
    const onCompletedClickHandler = () => props.changeFilter("completed")

    return (
        <div>
            <button
                className={props.filter === 'all' ? 'active-filter' : ''}
                onClick={onAllClickHandler}
            >All
            </button>
            <button
                className={props.filter === 'active' ? 'active-filter' : ''}
                onClick={onActiveClickHandler}
            >Active
            </button>
            <button
                className={props.filter === 'completed' ? 'active-filter' : ''}
                onClick={onCompletedClickHandler}
            >Completed
            </button>
        </div>
    )
};
