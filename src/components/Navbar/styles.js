import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    height: 90px;
    padding: 20px 16px;
    background: #FFC067;
    color: #f1f1f1; 
`;

export const Logo = styled.img`
    display: flex;
    list-style: none;
    align-items: center;
    width: 5em;
    border-radius: 1.4em;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
`;

export const Item = styled.li`
    margin-right: 1em;
    list-style-type: none;
    
    a {
    color: #0d0d0d;
    text-decoration: none;
}   a:hover {
    color: #157EFF;
}
`;