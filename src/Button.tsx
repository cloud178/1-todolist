import React from 'react';

type ButtonPropsType = {
    title: string
    callback?: () => void
}

export const Button = ({title, callback}: ButtonPropsType) => {
    const onClickHandler = () => {
        if (callback) {
            callback()
        }
    }

    return <button onClick={onClickHandler}>{title}</button>
};
