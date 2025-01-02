import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TaskType} from "./App";
import {TodolistHeader} from "./TodolistHeader";
import {AddForm} from "./AddForm";
import {FilterButtons} from "./FilterButtons";
import {Button} from "./Button";

type TodolistPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string) => void
    changeTasksStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: TodolistPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<null | string>(null);

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter' && e.ctrlKey) {
            addTask()
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim());
            setNewTaskTitle("");
        } else {
            setError('Title is required');
        }
    }

    // conditional rendering
    const tasksList = props.tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {
                props.tasks.map(t => {
                        const onClickRemoveHandler = () => {
                            props.removeTask(t.id)
                        }

                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTasksStatus(t.id, e.currentTarget.checked)
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

    return (
        <div className="todolist">
            <div>
                <TodolistHeader title={props.title}/>
                <input value={newTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyDown={onKeyPressHandler}
                       className={error ? 'error': ''}
                />
                <button onClick={addTask}>+</button>
                {error && <div className='error-message'>{error}</div>}
                {tasksList}
                <FilterButtons filter={props.filter} changeFilter={props.changeFilter} todolistId={props.id}/>
            </div>
        </div>
    )
        ;
};
