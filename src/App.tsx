import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    // BLL
    const todolistTitle = "What to learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS/TS", isDone: true},
        {id: v1(), title: "React", isDone: false},
    ])

    const removeTask = (taskId: string) => {
        const nextState: TaskType[] = tasks.filter(t => t.id !== taskId)
        setTasks(nextState)
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false,
        }
        const nextState: TaskType[] = [newTask, ...tasks]
        setTasks(nextState)
    }


    // UI
    const [filter, setNextFilter] = React.useState<FilterValuesType>("all")

    const changeTodolistFilter = (nextFilter: FilterValuesType) => {
        setNextFilter(nextFilter)
    }

    let filteredTasks: TaskType[] = tasks
    if (filter === "active") {
        filteredTasks = tasks.filter(t => !t.isDone)
    }
    if (filter === "completed") {
        filteredTasks = tasks.filter(t => t.isDone)
    }


    return (
        <div className="App">
            <Todolist
                title={todolistTitle}
                tasks={filteredTasks}
                removeTask={removeTask}
                changeTodolistFilter={changeTodolistFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
