import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import React, {useCallback} from "react";

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

    const chnageTodolistTitle = useCallback( (newTitle: string) => {
        changeTodolistTitle(todolistId, newTitle)
    }, [changeTodolistTitle, todolistId])


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
