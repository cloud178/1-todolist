import React from 'react';
import {Button} from "./Button";

type AddFormPropsType = {
    addTask: () => void;
}

export const AddForm = (props: AddFormPropsType) => {
    return (
        <div>
            <input/>
            <Button title={"+"}/>
        </div>
    )
};
