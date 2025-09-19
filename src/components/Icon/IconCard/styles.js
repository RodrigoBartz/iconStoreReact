import styled from "styled-components";

export const IconCard = styled.section`
    padding: 16px 20px;
    outline: none;
    border: none;
    width: 100%;
    background-color: #FAF9F6;
    color: white;
    font-size: 16px;
    max-width: 300px;
    position: relative;
    display: flex;
    justify-content: space-between;   
    h3 {
        color: black;
        cursor: pointer;
        margin-bottom: 0.4em;
        font-size: 1em;
    };
    h2 {
    color: black;
    margin-bottom: 0.4em;
    };
    h4 {
    color: black;
    margin-bottom: 0.4em;
    color: rgba(0, 0, 0, 0.5);
    };
    &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);     
    }
    &:hover button {
    display: flex;
    };
`;

export const IconImageContainer = styled.div`
    display: flex;
    width: 100px;
    align-items: center;
    justify-content:center;
    color: black;
    font-size: 2em;
    cursor: pointer;
`;


export const IconDescription = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CarrinhoButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    cursor: pointer;
    color: #ff6961;
    width: 44px;
    height: 44px;
    font-size: 1.2em;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: #FAF9F6;

`;