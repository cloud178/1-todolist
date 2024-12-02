import React from 'react';
import {TaskType} from "./App";
import {TodolistHeader} from "./TodolistHeader";
import {AddForm} from "./AddForm";
import {FilterButtons} from "./FilterButtons";

type TodolistPropsTYpe = {
    title: string,
    tasks: Array<TaskType>,
}

export function Todolist (props: TodolistPropsTYpe) {

    // conditional rendering
    const tasksList = props.tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {props.tasks.map(task => {
                return (
                    <li>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                    </li>
                )
            })}
        </ul>

    return (
        <div className="todolist">
            <div>
                <TodolistHeader title={props.title}/>
                <AddForm />
                {tasksList}
                <FilterButtons />
            </div>
        </div>
    );
};
