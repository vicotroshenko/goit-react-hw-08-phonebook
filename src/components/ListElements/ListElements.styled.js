import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 3px solid #4c97ff;
  border-radius: 10px;
  transition: all 200ms linear;
  font-weight: 700;
  color: #4c97ff;
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  &:hover {
    border: 3px solid blue;
    transform: scaleY(1.1);
    color: blue;
    background-color: white;
  }
  &:hover button {
    outline: 2px solid blue;
  }
  &:hover span {
    color: black;
  }
`;

export const ButtonDelete = styled.button`
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid blue;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  transition: all 200ms linear;
  box-sizing: border-box;
  margin: 0;
  &:hover {
    color: blue;
  }
  &:focus {
    color: blue;
  }
  &:active {
    font-weight: 700;
    color: red;
  }
`;

export const Phone = styled.span`
  display: inline-block;
  margin-left: 7px;
  margin-right: 7px;
`;
