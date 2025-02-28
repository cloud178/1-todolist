import React, {useCallback} from 'react';
import {FilterValuesType, TaskType} from "./App";
import {TodolistHeader} from "./TodolistHeader";
import {FilterButtons} from "./FilterButtons";
import {AddItemForm} from "./AddItemForm";
import List from '@mui/material/List';
import {Task} from "./Task";

type TodolistPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    changeTasksStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    changeTaskTitle: (todolistId: string, taskId: string, newTitle: string) => void
    removeTask: (todolistId: string, id: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (todolistId: string, title: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
}

export const Todolist = React.memo ((props: TodolistPropsType) => {
    console.log('Todolist is called')

    let tasksForTodolist = props.tasks
    if (props.filter === "completed") {
        tasksForTodolist = tasksForTodolist.filter(t => t.isDone)
    }
    if (props.filter === "active") {
        tasksForTodolist = tasksForTodolist.filter(t => !t.isDone)
    }

    // conditional rendering
    const tasksList = props.tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <List>
            {
                // props.tasks.map(t => {
                //         const onClickRemoveHandler = () => {
                //             props.removeTask(props.id, t.id)
                //         }
                //
                //         const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                //             props.changeTasksStatus(props.id, t.id, e.currentTarget.checked)
                //         }
                //
                //         const onChangeTitleHandler = (newTitle: string) => {
                //             props.changeTaskTitle(props.id, t.id, newTitle)
                //         }
                //
                //         return (
                //             <ListItem
                //                 key={t.id}
                //                 // className={t.isDone ? 'is-done' : ''}
                //                 sx={getListItemSx(t.isDone)}
                //             >
                //                 {/*<input*/}
                //                 {/*    type="checkbox"*/}
                //                 {/*    checked={t.isDone}*/}
                //                 {/*    onChange={onChangeStatusHandler}*/}
                //                 {/*/>*/}
                //                 <Checkbox
                //                     checked={t.isDone}
                //                     onChange={onChangeStatusHandler}
                //                 />
                //                 <EditableSpan title={t.title} onChange={onChangeTitleHandler}/>
                //                 {/*<button onClick={onClickRemoveHandler}>x</button>*/}
                //                 <IconButton onClick={onClickRemoveHandler}>
                //                     <Delete/>
                //                 </IconButton>
                //             </ListItem>
                //         )
                //     }
                // )
                tasksForTodolist.map(t => <Task
                    key={t.id}
                    todolistId={props.id}
                    task={t}
                    removeTask={props.removeTask}
                    changeTasksStatus={props.changeTasksStatus}
                    changeTaskTitle={props.changeTaskTitle}
                />)
            }
        </List>

    const addTask = useCallback ((title: string) => {
        props.addTask(props.id, title)
    }, [props.addTask, props.id])



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
});


