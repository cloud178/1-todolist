import {TasksStateType} from "../AppWithRedux";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: "REMOVE-TASK"
    todolistId: string
    taskId: string
};

export type AddTaskActionType = {
    type: "ADD-TASK"
    todolistId: string
    title: string
};

export type ChangeTaskStatusActionType = {
    type: "CHANGE-TASK-STATUS"
    todolistId: string
    taskId: string
    isDone: boolean
};

export type ActionsType =
    | RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType;

export type ChangeTaskTitleActionType = {
    type: "CHANGE-TASK-TITLE"
    todolistId: string
    taskId: string
    title: string
};

const inititalState: TasksStateType = {
}

export const tasksReducer = (
    state: TasksStateType = inititalState,
    action: ActionsType
): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const filteredTasks = tasks.filter(t => t.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks
            return stateCopy

        }
        case "ADD-TASK": {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId]
            const newTask = {id: v1(), title: action.title, isDone: false}
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks
            return stateCopy
        }
        case "CHANGE-TASK-STATUS": {
            // const stateCopy = {...state}
            // let tasks = stateCopy[action.todolistId];
            // let task = tasks.find(t => t.id === action.taskId);
            // if (task) {
            //     task.isDone = action.isDone;
            // }
            // return stateCopy

            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(st => st.id === action.taskId ? {...st, isDone: action.isDone} : st)
            }
        }
        case "CHANGE-TASK-TITLE": {
            // const stateCopy = {...state}
            // let tasks = stateCopy[action.todolistId];
            // let task = tasks.find(t => t.id === action.taskId);
            // if (task) {
            //     task.title = action.title;
            // }
            // return stateCopy

            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(st => st.id === action.taskId ? {...st, title: action.title} : st)
            }
        }
        case 'ADD-TODOLIST': {
            const stateCopy = {...state}
            stateCopy[action.todolistId] = []
            return stateCopy
        }
        case 'REMOVE-TODOLIST': {
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        }
        default:
            return state
    }
};

export const removeTaskAC = (
    todolistId: string,
    taskId: string
): RemoveTaskActionType => {
    return {
        type: "REMOVE-TASK",
        todolistId,
        taskId,
    };
};

export const addTaskAC = (
    todolistId: string,
    title: string
): AddTaskActionType => {
    return {
        type: "ADD-TASK",
        todolistId,
        title,
    };
};

export const changeTaskStatusAC = (
    todolistId: string,
    taskId: string,
    isDone: boolean,
): ChangeTaskStatusActionType => {
    return {
        type: "CHANGE-TASK-STATUS",
        todolistId,
        taskId,
        isDone,
    };
};

export const changeTaskTitleAC = (
    todolistId: string,
    taskId: string,
    title: string,
): ChangeTaskTitleActionType => {
    return {
        type: "CHANGE-TASK-TITLE",
        todolistId,
        taskId,
        title,
    };
};
