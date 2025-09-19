import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    background-color: white;
    width: 100%;
    max-width: 500px;
    gap: 13px;
    padding-right: 13px;
    border-radius: 20px;
    margin-right: 20px;
    margin-left: 20px;
`
export const Input = styled.input`
    padding: 13px;
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 0.8rem;
    font-weight: 600px;
    border-right: 1px solid #ccc;
`

export const Button = styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9b9b9b;
    cursor: pointer;
`