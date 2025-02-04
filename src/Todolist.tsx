import React, {ChangeEvent} from 'react';
import {FilterValuesType, TaskType} from "./App";
import {TodolistHeader} from "./TodolistHeader";
import {FilterButtons} from "./FilterButtons";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from '@mui/icons-material';
import {getListItemSx} from "./Todolist.styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

type TodolistPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, id: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (todolistId: string, title: string) => void
    changeTasksStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
}

export function Todolist(props: TodolistPropsType) {

    // conditional rendering
    const tasksList = props.tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <List>
            {
                props.tasks.map(t => {
                        const onClickRemoveHandler = () => {
                            props.removeTask(props.id, t.id)
                        }

                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTasksStatus(props.id, t.id, e.currentTarget.checked)
                        }

                        const onChangeTitleHandler = (newTitle: string) => {
                            props.changeTaskTitle(t.id, newTitle, props.id)
                        }

                        return (
                            <ListItem
                                key={t.id}
                                // className={t.isDone ? 'is-done' : ''}
                                sx={getListItemSx(t.isDone)}
                            >
                                {/*<input*/}
                                {/*    type="checkbox"*/}
                                {/*    checked={t.isDone}*/}
                                {/*    onChange={onChangeStatusHandler}*/}
                                {/*/>*/}
                                <Checkbox
                                    checked={t.isDone}
                                    onChange={onChangeStatusHandler}
                                />
                                <EditableSpan title={t.title} onChange={onChangeTitleHandler}/>
                                {/*<button onClick={onClickRemoveHandler}>x</button>*/}
                                <IconButton onClick={onClickRemoveHandler}>
                                    <Delete/>
                                </IconButton>
                            </ListItem>
                        )
                    }
                )
            }
        </List>

    const addTask = (title: string) => {
        props.addTask(props.id, title)
    }

    return (
        <div className="todolist">
            <div>
                <TodolistHeader
                    title={props.title}
                    todolistId={props.id}
                    deleteTodolist={props.removeTodolist}
                    changeTodolistTitle={props.changeTodolistTitle}
                />
                <AddItemForm addItem={addTask}/>
                {tasksList}
                <FilterButtons filter={props.filter} changeFilter={props.changeFilter} todolistId={props.id}/>
            </div>
        </div>
    )
};





