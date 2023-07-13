import styled from 'styled-components';
import img from './a.jpg';

export const List = styled.ul`
	position: relative;
  list-style-type: none;
  width: 100vw;
  min-height: 40vw;
  max-width: 500px;
  box-sizing: border-box;
	border: 3px solid black;
  border-radius: 20px;
  padding: 20px 30px;
  background-image: url(${img});
  background-position: center;
  background-size: 70%;
`;
