import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    label {
    margin-bottom: 0.6em;
    font-weight: bold;
}   select {
    padding: 0.7em;
    border-radius: 4em;
    border: none;
    outline: none;
    color: #7b7b7b;
}
    option {
        &:focus {
      outline: none;
      border-color: #0056b3;
      box-shadow: 0 0 6px rgba(0, 91, 187, 0.4);
    }
}
`;