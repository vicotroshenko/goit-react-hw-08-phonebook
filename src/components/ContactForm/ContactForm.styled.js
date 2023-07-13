import styled from 'styled-components';
import img from './a.jpg';

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 5%;
`;

export const Form = styled.form`
  padding: 30px;
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-sizing: border-box;
  border: 3px solid black;
  background-image: url(${img});
  background-position: center;
  background-size: 70%;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-top: 15px;
`;

export const Submit = styled.button`
  margin-top: 10px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  font-size: 22px;
  border-radius: 10px;
  border: 3px solid black;
  outline: none;
  background-color: rgba(76, 151, 255, 0.4);
  box-sizing: border-box;
  transition: all 200ms linear;
  &:hover {
    border: 3px solid rgba(255, 195, 0, 0.9);
    background-color: rgba(76, 151, 255, 0.9);
  }
  &:focus {
    border: 2px solid rgba(255, 195, 0, 0.9);
    background-color: rgba(76, 151, 255, 0.9);
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  border: 1px solid black;
  background-color: rgba(76, 151, 255, 0.4);
  border-radius: 10px;
  padding: 10px 10px;
  transition: 200ms linear;
  font-weight: 700;
  &:hover {
    border: 1px solid rgba(255, 195, 0, 0.9);
  }
  &:focus {
    border: 1px solid rgba(255, 195, 0, 0.9);
  }
  &:active {
    border: 1px solid rgba(255, 195, 0, 0);
  }
`;
