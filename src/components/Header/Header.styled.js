import { styled } from '@mui/system';
import { AppBar } from '@mui/material';

export const HeaderStyled = styled(AppBar)`
 	position: fixed;
 	top: 0;
	right: 0;
 	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	background-color: rgba(25,118,210, 0.2);
	& p{
		color: white;
		font-size: 22px;
		margin: 0;
		font-family: 'Kablammo', cursive;
	}
`

