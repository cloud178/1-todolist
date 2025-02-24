import React, {ChangeEvent, useCallback} from 'react';
import {FilterValuesType, TaskType} from "./AppWithRedux";
import {TodolistHeader} from "./TodolistHeader";
import {FilterButtons} from "./FilterButtons";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from '@mui/icons-material';
import {getListItemSx} from "./Todolist.styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {TasksStateType} from "./AppWithRedux";

type TodolistPropsType = {
    id: string
    title: string
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
}

export const Todolist = (props: TodolistPropsType) => {
    console.log('Todolist is called')
    const dispatch = useDispatch();

    const tasks = useSelector<AppRootState, TaskType[]>(state => state.tasks[props.id])


    let tasksForTodolist = tasks;
    if (props.filter === "completed") {
        tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
    }
    if (props.filter === "active") {
        tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
    }

    const addTask = useCallback((title: string) => {
        dispatch(addTaskAC(props.id, title))
    }, [])

    // conditional rendering
    const tasksList = tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <List>
            {
                tasksForTodolist.map(t => {
                        const onClickRemoveHandler = () => {
                            dispatch(removeTaskAC(props.id, t.id))

                        }

                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            dispatch(changeTaskStatusAC(props.id, t.id, e.currentTarget.checked))

                        }

                        const onChangeTitleHandler = (newTitle: string) => {
                            dispatch(changeTaskTitleAC(props.id, t.id, newTitle))

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





