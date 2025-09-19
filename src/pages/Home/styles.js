import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 2.4em;
  flex-wrap: wrap;
  flex: 1;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
  color: #0d0d0d;  
`;

export const IconCards = styled.div`
  display: grid;
  width: 100%;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 240px);
  padding: 8px;
  margin: 8px;
  gap: 20px;
`;