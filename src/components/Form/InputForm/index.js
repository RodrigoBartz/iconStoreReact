import React from 'react'
import * as C from "./styles";

const InputForm = ({ type, text, name, placeholder, handleOnChange, value }) => {
    return (
        <C.Container>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </C.Container>

    )
}

export default InputForm