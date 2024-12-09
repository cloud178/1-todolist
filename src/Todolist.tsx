import React from 'react';
import {FilterValuesType, TaskType} from "./App";
import {TodolistHeader} from "./TodolistHeader";
import {AddForm} from "./AddForm";
import {FilterButtons} from "./FilterButtons";

type TodolistPropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: number) => void,
    changeFilter: (value: FilterValuesType) => void,
}

export function Todolist(props: TodolistPropsType) {

    // conditional rendering
    const tasksList = props.tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {props.tasks.map(t => {
                return (
                    <li>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                    </li>
                )
            })}
        </ul>

    return (
        <div className="todolist">
            <div>
                <TodolistHeader title={props.title}/>
                <AddForm/>
                {tasksList}
                <FilterButtons changeFilter={props.changeFilter}/>
            </div>
        </div>
    );
};
