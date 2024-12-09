import React from 'react';
import {FilterValuesType, TaskType} from "./App";
import {TodolistHeader} from "./TodolistHeader";
import {AddForm} from "./AddForm";
import {FilterButtons} from "./FilterButtons";
import {Button} from "./Button";

type TodolistPropsTYpe = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (TaskId: number) => void,
    changeTodolistFilter: (nextFilter: FilterValuesType) => void,
}

export function Todolist (props: TodolistPropsTYpe) {

    // conditional rendering
    const tasksList = props.tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {props.tasks.map(t => {
                return (
                    <li>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button title={"X"} onClickHandler={ () => props.removeTask(t.id) }/>

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
                <FilterButtons changeTodolistFilter={props.changeTodolistFilter} />
            </div>
        </div>
    );
};
