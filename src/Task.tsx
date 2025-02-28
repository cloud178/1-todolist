import {TaskType} from "./App";
import React, {ChangeEvent, useCallback} from "react";
import ListItem from "@mui/material/ListItem";
import {getListItemSx} from "./Todolist.styles";
import {Checkbox, IconButton} from "@mui/material";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@mui/icons-material";

type TaskPropsType = {
    changeTasksStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (todolistId: string, taskId: string, newTitle: string) => void
    removeTask: (todolistId: string, id: string) => void
    task: TaskType
    todolistId: string
}
export const Task = React.memo( (props: TaskPropsType) => {
    const onClickRemoveHandler = () => {
        props.removeTask(props.todolistId, props.task.id)
    }

    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTasksStatus(props.todolistId, props.task.id, e.currentTarget.checked)
    }

    const onChangeTitleHandler = useCallback ((newTitle: string) => {
        props.changeTaskTitle(props.todolistId, props.task.id, newTitle)
    }, [props.changeTaskTitle, props.todolistId, props.task.id])

    return (
        <ListItem
            key={props.task.id}
            // className={t.isDone ? 'is-done' : ''}
            sx={getListItemSx(props.task.isDone)}
        >
            {/*<input*/}
            {/*    type="checkbox"*/}
            {/*    checked={t.isDone}*/}
            {/*    onChange={onChangeStatusHandler}*/}
            {/*/>*/}
            <Checkbox
                checked={props.task.isDone}
                onChange={onChangeStatusHandler}
            />
            <EditableSpan title={props.task.title} onChange={onChangeTitleHandler}/>
            {/*<button onClick={onClickRemoveHandler}>x</button>*/}
            <IconButton onClick={onClickRemoveHandler}>
                <Delete/>
            </IconButton>
        </ListItem>
    )
})
