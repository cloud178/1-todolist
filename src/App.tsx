import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    // BLL
    const todolistTitle = "What to learn"

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/TS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])

    const removeTask = (taskId: number) => {

        const nextState: TaskType[] = tasks.filter(t => t.id !== taskId)
        setTasks(nextState)
        console.log(nextState)
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
            />
        </div>
    );
}

export default App;
