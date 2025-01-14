import React, {ChangeEvent} from 'react';
import {FilterValuesType, TaskType} from "./App";
import {TodolistHeader} from "./TodolistHeader";
import {FilterButtons} from "./FilterButtons";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from '@mui/icons-material';

type TodolistPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTasksStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
}

export function Todolist(props: TodolistPropsType) {

    // conditional rendering
    const tasksList = props.tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <div>
            {
                props.tasks.map(t => {
                        const onClickRemoveHandler = () => {
                            props.removeTask(t.id, props.id)
                        }

                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTasksStatus(t.id, e.currentTarget.checked, props.id)
                        }

                        const onChangeTitleHandler = (newTitle: string) => {
                            props.changeTaskTitle(t.id, newTitle, props.id)
                        }

                        return (
                            <div key={t.id} className={t.isDone ? 'is-done' : ''}>
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
                            </div>
                        )
                    }
                )
            }
        </div>

    const addTask = (title: string) => {
        props.addTask(title, props.id)
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





