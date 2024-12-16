import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

export type FilterValuesType = "all" | "active" | "completed";


function App() {
    // BLL
    const todolistTitle_1 = "What to learn"

    // let initTasks: Array<TaskType> = [
    //     {
    //         id: 1,
    //         title: "HTML&CSS",
    //         isDone: true,
    //     },
    //     {
    //         id: 2,
    //         title: "JS/TS",
    //         isDone: true,
    //     },
    //     {
    //         id: 3,
    //         title: "React",
    //         isDone: false,
    //     },
    //     {
    //         id: 4,
    //         title: "Docker",
    //         isDone: true,
    //     },
    // ]

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {
            id: v1(),
            title: "HTML&CSS",
            isDone: true,
        },
        {
            id: v1(),
            title: "JS/TS",
            isDone: true,
        },
        {
            id: v1(),
            title: "React",
            isDone: false,
        },
        {
            id: v1(),
            title: "Docker",
            isDone: true,
        },
    ]);
    const [filter, setFilter] = useState<FilterValuesType>("all")

    function removeTask(id: string) {
        let filteredTasks = tasks.filter( t => t.id !== id );
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone)
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }

    // UI
    return (
        <div className="App">
            <Todolist title={todolistTitle_1}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
