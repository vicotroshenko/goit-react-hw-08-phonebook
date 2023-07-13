import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  & input {
    display: block;
    width: 100%;
    margin-top: 5px;
    font-size: 22px;
    padding: 5px;
    border-radius: 8px;
    border: 3px solid black;
    outline: none;
    box-sizing: border-box;
    background-color: rgba(76, 151, 255, 0.4);
    &:hover {
      border: 3px solid rgba(255, 195, 0, 0.9);
      background-color: rgba(76, 151, 255, 0.9);
    }
    &:focus {
      border: 2px solid rgba(255, 195, 0, 0.9);
      background-color: rgba(76, 151, 255, 0.9);
    }
  }
`;

export const Subtitle = styled.h2`
  text-align: center;
`;
