import React, { Children } from 'react';
import classes from './input.module.css';

type InputProps = {
    label?: string
    placeholder?: string,
    type: string,
    value?: string,
    onChange: any,
    checked? : boolean,
    readonly? : boolean
}

function Input(props: InputProps) {
    return <div className={classes.InputWrapper}>
        {(props.label && props.label !== '') ? <span>{props.label}</span> : null}
        <div style={{ display: 'flex' }}  >
            <input readOnly={props.readonly} checked={props.checked} value={props.value} className={classes.Input} placeholder={props.placeholder} onChange={props.onChange} type={props.type}></input>
            {props.type === 'checkbox' ? props.value : null}
        </div>
    </div>;
}

export default Input;