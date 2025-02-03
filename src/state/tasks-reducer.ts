import { FilterValuesType, TasksStateType, TodolistType } from "../App";
import { v1 } from "uuid";

export type RemoveTaskActionType = {
    type: "REMOVE-TASK";
    todolistId: string;
    taskId: string;
};

export type Action2Type = {
    type: "2";
    title: string;
};

export type ActionsType = RemoveTaskActionType | Action2Type;

export const tasksReducer = (
    state: TasksStateType,
    action: ActionsType
): TasksStateType => {
    switch (action.type) {
        case "1": {
            return {
                ...state,
            };
        }
        case "1": {
            return {
                ...state,
            };
        }
        default:
            throw new Error("I don't understand this action type");
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

export const Action2AC = (title: string): Action2Type => {
    return {
        type: "2",
        title,
    };
};
