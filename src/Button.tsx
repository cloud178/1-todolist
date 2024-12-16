import React from 'react';

type ButtonPropsType = {
    title: string,
    onClickHandler?: () => void,
    isBtnDisabled?: boolean,
}

export const Button = ({title, onClickHandler, isBtnDisabled}: ButtonPropsType) => {
    return <button
        disabled={isBtnDisabled}
        onClick={onClickHandler}>{title}</button>
};
