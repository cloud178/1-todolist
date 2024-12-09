import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

export type FilterValuesType = "all" | "active" | "completed";


function App() {
    // BLL
    const todolistTitle_1 = "What to learn"
    // const todolistTitle_2 = "Songs"

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
        {
            id: 4,
            title: "Docker",
            isDone: true,
        },
    ]);
    const [filter, setFilter] = useState<FilterValuesType>("all")

    // const tasks_2: TaskType[] = [
    //     {
    //         id: 1,
    //         title: "Hello world",
    //         isDone: true,
    //     },
    //     {
    //         id: 2,
    //         title: "I am happy",
    //         isDone: false,
    //     },
    //     {
    //         id: 3,
    //         title: "Yo",
    //         isDone: false,
    //     },
    // ]

    function removeTask(id: number) {
        let filteredTasks = tasks.filter( t => t.id !== id );
        setTasks(filteredTasks);
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
            />
            {/*<Todolist title={todolistTitle_2} tasks={tasks_2}/>*/}
        </div>
    );
}

export default App;
