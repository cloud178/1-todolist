import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, IconButton, TextField} from "@mui/material";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export type AddItemFormType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<null | string>(null);

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter' && e.ctrlKey) {
            addTask()
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addItem(newTaskTitle.trim());
            setNewTaskTitle("");
        } else {
            setError('Title is required');
            setNewTaskTitle("");
        }
    }

    return (
        <div>
            {/*<input value={newTaskTitle}*/}
            {/*       onChange={onNewTitleChangeHandler}*/}
            {/*       onKeyDown={onKeyPressHandler}*/}
            {/*       className={error ? 'error' : ''}*/}
            {/*/>*/}
            <TextField
                value={newTaskTitle}
                variant="outlined"
                label={'type value'}
                onChange={onNewTitleChangeHandler}
                onKeyDown={onKeyPressHandler}
                // className={error ? 'error' : ''}
                error={!!error}
                helperText={error}
                size={"small"}
            />
            {/*<Button onClick={addTask} variant={"contained"}>+</Button>*/}
            <IconButton onClick={addTask} color={"primary"}>
                <ControlPointIcon/>
            </IconButton>
            {/*{error && <div className='error-message'>{error}</div>}*/}
        </div>
    )
}
