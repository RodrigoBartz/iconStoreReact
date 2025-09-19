import React from 'react'
import * as C from "./styles";

const SelectForm = ({ text, name, options, handleOnChange, value }) => {
    return (
        <C.Container>
            <label htmlFor={name}>{text}</label>
            <select name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.name}>{option.name}</option>
                ))}
            </select>
        </C.Container>
    )
}

export default SelectForm