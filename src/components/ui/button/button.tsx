import React, { Children } from 'react';
import classes from './button.module.css';

type ButtonProps = {
    children:any,
    type:string,
    onClick:React.MouseEventHandler<HTMLButtonElement>
}

function Button(props: ButtonProps) {
    const buttonClass = props.type === 'danger' ? classes.Danger : classes.Primary;
    return <button className={ classes.Button + " " + buttonClass} onClick={props.onClick}>{props.children}</button>;
}

export default Button;