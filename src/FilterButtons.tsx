import { Button } from '@mui/material';
import React, { useCallback } from 'react';
import {FilterValuesType} from "./App";

type FilterButtonsPropsType = {
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    filter: string
    todolistId: string
}

export const FilterButtons = (props: FilterButtonsPropsType) => {
    const onAllClickHandler = useCallback( () => props.changeFilter(props.todolistId, "all"), [props.changeFilter, props.todolistId])
    const onActiveClickHandler = useCallback( () => props.changeFilter(props.todolistId, "active"), [props.changeFilter, props.todolistId])
    const onCompletedClickHandler = useCallback( () => props.changeFilter(props.todolistId, "completed"), [props.changeFilter, props.todolistId])

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
