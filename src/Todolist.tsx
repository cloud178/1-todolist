import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType, TaskType} from "./App";
import {TodolistHeader} from "./TodolistHeader";
import {AddForm} from "./AddForm";
import {FilterButtons} from "./FilterButtons";
import {Button} from "./Button";

type TodolistPropsTYpe = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (TaskId: string) => void,
    changeTodolistFilter: (nextFilter: FilterValuesType) => void,
    addTask: (title: string) => void,
    changeTaskStatus: (taskId: string, newStatus: boolean) => void,
    filter: FilterValuesType,
}

export function Todolist(props: TodolistPropsTYpe) {

    const [taskTitle, setTaskTitle] = useState("")
    const [error, setError] = useState<boolean>(false)

    // conditional rendering
    const tasksList = props.tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {props.tasks.map(t => {

                const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.changeTaskStatus(t.id, e.currentTarget.checked)
                }

                return (
                    <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={changeTaskStatusHandler}
                        />
                        <span className={t.isDone ? 'task-done' : 'task'}>{t.title}</span>
                        <Button title={"x"} onClickHandler={() => props.removeTask(t.id)}/>
                    </li>
                )
            })}
        </ul>

    const isAddTaskPossible = taskTitle.length <= 15

    // handlers
    const addTaskHandler = () => {
        const trimmedTitle = taskTitle.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTaskTitle("")
    }

    const setLocalTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTaskTitle(e.currentTarget.value)
    }

    const onKeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if ((taskTitle.length && isAddTaskPossible) && e.key === "Enter") {
            addTaskHandler()
        }
    }

    return (
        <div className="todolist">
            <div>
                <TodolistHeader title={props.title}/>
                {/*<AddForm />*/}
                <div>
                    <input
                        value={taskTitle}
                        onChange={setLocalTitleHandler}
                        onKeyDown={onKeyDownAddTaskHandler}
                        className={error ? 'input-error' : ''}
                    />
                    <Button
                        title={"+"}
                        onClickHandler={addTaskHandler}
                        isBtnDisabled={!taskTitle.length || !isAddTaskPossible}
                    />
                </div>
                {!isAddTaskPossible && <div>Task title is too long</div>}
                {!taskTitle.length && <div>Enter task title (max 15 chars)</div>}
                {error && <div style={{color: 'red'}}>Task title is required</div>}
                {tasksList}
                <FilterButtons
                    filter={props.filter}
                    changeTodolistFilter={props.changeTodolistFilter}
                />
            </div>
        </div>
    );
}


// const taskInputRef = React.useRef<HTMLInputElement>(null);

// <div>
//     <input
//         placeholder={"15 symbols max"}
//         ref={taskInputRef}
//     />
//     <Button title={"+"} onClickHandler={() => {
//         if (taskInputRef.current) {
//             props.addTask(taskInputRef.current.value)
//             taskInputRef.current.value = "";
//         }
//     }}/>
// </div>