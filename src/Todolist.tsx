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
    addTask: (title: string) => void
}

export function Todolist(props: TodolistPropsTYpe) {

    const [taskTitle, setTaskTitle] = useState("")

    // conditional rendering
    const tasksList = props.tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {props.tasks.map(t => {
                return (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button title={"x"} onClickHandler={() => props.removeTask(t.id)}/>
                    </li>
                )
            })}
        </ul>

    const isAddTaskPossible = taskTitle.length <= 15

    // handlers
    const addTaskHandler = () => {
        props.addTask(taskTitle)
        setTaskTitle("")
    }

    const setLocalTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.currentTarget.value)

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
                        onChange={ setLocalTitleHandler }
                        onKeyDown={ onKeyDownAddTaskHandler }
                    />
                    <Button
                        title={"+"}
                        onClickHandler={addTaskHandler}
                        isBtnDisabled={ !taskTitle.length || !isAddTaskPossible}
                    />
                </div>
                {!isAddTaskPossible && <div>Task title is too long</div>}
                {!taskTitle.length && <div>Enter task title (max 15 chars)</div>}
                {tasksList}
                <FilterButtons changeTodolistFilter={props.changeTodolistFilter}/>
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