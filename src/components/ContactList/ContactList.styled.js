import { styled } from '@mui/system';
import { List } from '@mui/material';


export const StyledList = styled(List)`
	margin: 0 auto;
	max-width: 450px;
	min-height: 70vh;
	border-radius: 15px;
	padding-bottom: 20px;
	margin-bottom: 55px;
	background-color: rgba(255, 255, 255, 0.5);
	background: linear-gradient(168deg, rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0.2));
	background-size: 400% 400%;
	font-family: 'Yatra One', cursive;
	box-shadow: 25px 0 20px -20px rgba(0, 0, 0, 0.45), -25px 0 20px -20px rgba(0, 0, 0, 0.45);
	-o-animation: bglist 20s ease infinite;
	animation: bglist 20s ease infinite;

	@-o-keyframes bglist {
	0%{background-position:18% 0%}
	50%{background-position:83% 100%}
	100%{background-position:18% 0%}
}
@keyframes bglist {
	0%{background-position:18% 0%}
	50%{background-position:83% 100%}
	100%{background-position:18% 0%}

}

@media screen and (max-width: 480px){
		font-size: 12px;
	}
`
