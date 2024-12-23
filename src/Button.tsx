import React from 'react';

type ButtonPropsType = {
    title: string,
    onClickHandler?: () => void,
    isBtnDisabled?: boolean,
    classes?: string,
}

export const Button = ({title, onClickHandler, isBtnDisabled, classes}: ButtonPropsType) => {
    return <button
        disabled={isBtnDisabled}
        className={classes}
        onClick={onClickHandler}>{title}</button>
};
