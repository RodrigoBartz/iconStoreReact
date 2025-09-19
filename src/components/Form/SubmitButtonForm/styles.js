import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
}
`;

export const Button = styled.button`
    background-color: #ff6961;
    color: #fff;
    padding: 0.7em 1.2em;
    border-radius: 4em;
    text-decoration: none;
    transition: .5s;
    cursor: pointer;
    border: none;
    &:hover {
    color: #157EFF;
}
}
`;