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

type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}


function App() {
    // BLL

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {
            id: v1(),
            title: "HTML&CSS",
            isDone: true,
        },
        {
            id: v1(),
            title: "JS/TS",
            isDone: false,
        },
        {
            id: v1(),
            title: "React",
            isDone: false,
        },
        {
            id: v1(),
            title: "Docker",
            isDone: false,
        },
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)
    }

    const changeStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks])
    }

    // UI
    function changeFilter(value: FilterValuesType, todolistId: string) {
        // const resultTodolists = todolists.map( tl => {
        //     return (
        //         tl.id === todolistId
        //         ? { ...tl, filter: value}
        //         : tl
        //     )
        // } )
        //
        // setTodolists(resultTodolists)

        const todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }

    let todolistId1 = v1()
    let todolistId2 = v1()

    const [todolists, setTodolists] = useState<TodolistType[]>([
        {id: todolistId1, title: 'What to learn', filter: 'active'},
        {id: todolistId2, title: 'What to buy', filter: 'completed'},
    ])

    let [allTasks, setAllTasks] = useState({
        todolistId1: [
            {id: v1(),title: "HTML&CSS",isDone: true},
            {id: v1(),title: "JS",isDone: true},
            {id: v1(),title: "ReactJS",isDone: false},
            {id: v1(),title: "Rest API",isDone: false},
            {id: v1(),title: "GraphQL",isDone: false},
        ],
        todolistId2: [
            {id: v1(),title: "Book",isDone: false},
            {id: v1(),title: "Milk",isDone: true},
        ]
    })

    return (
        <div className="App">
            {
                todolists.map(tl => {

                    let tasksForTodolist = tasks;
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasks.filter(t => t.isDone)
                    }
                    if (tl.filter === "active") {
                        tasksForTodolist = tasks.filter(t => !t.isDone)
                    }

                    return (
                        <Todolist
                            key={tl.id}
                            id={tl.id}
                            title={tl.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTasksStatus={changeStatus}
                            filter={tl.filter}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;
