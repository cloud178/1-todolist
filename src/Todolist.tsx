import React, {ChangeEvent} from 'react';
import {FilterValuesType, TaskType} from "./App";
import {TodolistHeader} from "./TodolistHeader";
import {FilterButtons} from "./FilterButtons";
import {AddItemForm} from "./AddItemForm";

type TodolistPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTasksStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void
}

export function Todolist(props: TodolistPropsType) {

    // conditional rendering
    const tasksList = props.tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {
                props.tasks.map(t => {
                        const onClickRemoveHandler = () => {
                            props.removeTask(t.id, props.id)
                        }

                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTasksStatus(t.id, e.currentTarget.checked, props.id)
                        }

                        return (
                            <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                                <input
                                    type="checkbox"
                                    checked={t.isDone}
                                    onChange={onChangeHandler}
                                />
                                <span>{t.title}</span>
                                <button onClick={onClickRemoveHandler}>x</button>
                            </li>
                        )
                    }
                )
            }
        </ul>

    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    return (
        <div className="todolist">
            <div>
                <TodolistHeader title={props.title} todolistId={props.id} callback={props.removeTodolist}/>
                <AddItemForm addItem={addTask}/>
                {tasksList}
                <FilterButtons filter={props.filter} changeFilter={props.changeFilter} todolistId={props.id}/>
            </div>
        </div>
    )
};
