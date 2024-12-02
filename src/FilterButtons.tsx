import React from 'react';
import {Button} from "./Button";

type FilterButtonsPropsType = {
}

export const FilterButtons = (props: FilterButtonsPropsType) => {
    return (
        <div>
            <Button title={"All"}/>
            <Button title={"Active"}/>
            <Button title={"Completed"}/>
        </div>
    )
};
