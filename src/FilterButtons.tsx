import React from 'react';
import {Button} from "./Button";
import {FilterValuesType} from "./App";

type FilterButtonsPropsType = {
    changeFilter: (value: FilterValuesType) => void,
}

export const FilterButtons = (props: FilterButtonsPropsType) => {
    return (
        <div>
            <button onClick={ () => {props.changeFilter("all")} }>All</button>
            <button onClick={ () => {props.changeFilter("active")} }>Active</button>
            <button onClick={ () => {props.changeFilter("completed")} }>Completed</button>
        </div>
    )
};
