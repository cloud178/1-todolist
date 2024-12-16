import React from 'react';
import {FilterValuesType} from "./App";

type FilterButtonsPropsType = {
    changeFilter: (value: FilterValuesType) => void,
}

export const FilterButtons = (props: FilterButtonsPropsType) => {
   const onAllClickHandler = () => props.changeFilter("all")
   const onActiveClickHandler = () => props.changeFilter("active")
   const onCompletedClickHandler = () => props.changeFilter("completed")

    return (
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    )
};
