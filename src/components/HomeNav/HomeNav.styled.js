import styled from 'styled-components';



export const ContainerHome = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-family: 'Yatra One', cursive;
`
export const RegistredBox = styled.div`
	display: inline-block;
	border: 1px solid black;
	padding: 10px 15px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
	}
	&:active {
		background-color: rgba(255, 255, 255, 0.5);
	}
`

export const LoginBox = styled.div`
	display: inline-block;
	border: 1px solid black;
	padding: 10px 15px;
	margin-left: 10px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
	}
	&:active {
		background-color: rgba(255, 255, 255, 0.5);
	}
`

export const Title = styled.h1`
	font-family: 'Kablammo', cursive;
`
