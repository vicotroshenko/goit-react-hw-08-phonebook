import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import operetions from 'redux/operations';
import { HeaderStyled } from './Header.styled';
import { Tooltip } from '@mui/material';


export const Header = () => {
  const dispatch = useDispatch();

	const handleLogOut = () => {
    dispatch(operetions.logOut());
  };
	return (
		<HeaderStyled>
				<p>Phonebook</p>
				<Tooltip title="Sign out of the account">
					<Box>
						<IconButton onClick={handleLogOut}>
							<LogoutIcon  sx={{color: "white"}} />
						</IconButton>
				</Box>
				</Tooltip>


		</HeaderStyled>
  );
}