import React from 'react';
import {FilterValuesType} from "./App";

type FilterButtonsPropsType = {
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    filter: string
    todolistId: string
}

export const FilterButtons = (props: FilterButtonsPropsType) => {
    const onAllClickHandler = () => props.changeFilter("all", props.todolistId)
    const onActiveClickHandler = () => props.changeFilter("active", props.todolistId)
    const onCompletedClickHandler = () => props.changeFilter("completed", props.todolistId)

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
