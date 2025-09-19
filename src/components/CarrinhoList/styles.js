import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    width: 400px;
    height: 50px;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    margin: 2em;
    position: relative;
`
export const IconImage = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const IconDetails = styled.div`
`

export const IconName = styled.h3`
    font-size: 1em;
`

export const IconPrice = styled.h3`
    font-size: 1.75em;
`

export const RemoveButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    border-radius: 4em;
    width: 28px;
    height: 28px;
    background-color: #ff6961;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
    color: white;
    }
`