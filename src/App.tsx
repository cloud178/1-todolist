import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

function App() {
    // BLL
    const todolistTitle_1 = "What to learn"
    const todolistTitle_2 = "What to buy"

    const tasks_1: Array<TaskType> = [
        {
            id: 1,
            title: "HTML&CSS",
            isDone: true,
        },
        {
            id: 2,
            title: "JS/TS",
            isDone: true,
        },
        {
            id: 3,
            title: "React",
            isDone: false,
        },
    ]
    const tasks_2: TaskType[] = [
    ]

    // UI
    return (
        <div className="App">
            <Todolist title={todolistTitle_1} tasks={tasks_1}/>
        </div>
    );
}

export default App;
