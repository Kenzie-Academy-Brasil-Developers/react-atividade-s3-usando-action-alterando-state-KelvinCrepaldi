import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  padding: 5px;
  h3 {
    width: 100%;
  }

  input,
  button {
    margin: 0;
    padding: 0;
    border: none;
  }

  input {
    width: 200px;
    height: 30px;
    border-radius: 5px;
  }

  button {
    width: 100px;
    height: 30px;
    border: none;
    margin: 4px;
    border-radius: 20px;
    background-color: rgb(100, 100, 100);
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: rgb(150, 150, 150);
  }
`;
