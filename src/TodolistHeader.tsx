import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import React from "react";

type TodolistHeaderPropsType = {
    title: string
    todolistId: string
    deleteTodolist: (todolistId: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void

}

export const TodolistHeader = ({
                                   title,
                                   todolistId,
                                   deleteTodolist,
                                   changeTodolistTitle
}: TodolistHeaderPropsType) => {
    const deleteTodolistHandler = () => {
        deleteTodolist(todolistId)
    }

    const chnageTodolistTitle = (newTitle: string) => {
        changeTodolistTitle(todolistId, newTitle)
    }


    return (
        <h3>
            <EditableSpan title={title} onChange={chnageTodolistTitle}/>
            {/*<Button title={'x'} callback={deleteTodolistHandler}/>*/}
            <IconButton onClick={deleteTodolistHandler}>
                <Delete/>
            </IconButton>
        </h3>
    )
}
