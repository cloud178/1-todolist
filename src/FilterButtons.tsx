import { Button } from '@mui/material';
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
            <Button
                color={"inherit"}
                variant={props.filter === 'all' ? "contained" : "text"}
                // className={props.filter === 'all' ? 'active-filter' : ''}
                onClick={onAllClickHandler}
            >All
            </Button>
            <Button
                color={"primary"}
                // className={props.filter === 'active' ? 'active-filter' : ''}
                variant={props.filter === 'active' ? "contained" : "text"}
                onClick={onActiveClickHandler}
            >Active
            </Button>
            <Button
                color={"secondary"}
                // className={props.filter === 'completed' ? 'active-filter' : ''}
                variant={props.filter === 'completed' ? "contained" : "text"}
                onClick={onCompletedClickHandler}
            >Completed
            </Button>
        </div>
    )
};
