import {Button} from "./Button";

type TodolistHeaderPropsType = {
    title: string
    todolistId: string
    callback: (todolistId: string) => void
}

export const TodolistHeader = ({title, todolistId, callback}: TodolistHeaderPropsType) => {
    const deleteTodolistHandler = () => {
        callback(todolistId)
    }


    return (
        <h3>
            {title}
            <Button title={'x'} callback={deleteTodolistHandler}/>
        </h3>
    )
}
