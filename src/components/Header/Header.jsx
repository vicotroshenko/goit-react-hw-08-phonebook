import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import operetions from 'redux/auth/operations';
import { HeaderStyled } from './Header.styled';
import { Tooltip } from '@mui/material';

const styleUser = {
  display: 'flex',
  alignItems: 'center',
  columnGap: '5px',
  fontFamily: "'Yatra One', cursive",
};
export const Header = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(state => state.auth.user);

  const handleLogOut = () => {
    dispatch(operetions.logOut());
  };
  return (
    <HeaderStyled>
      <p>Phonebook</p>
      <div style={styleUser}>
        <Tooltip title={name}>
          <span>{email}</span>
        </Tooltip>
        <Tooltip title="Sign out of the account">
          <Box>
            <IconButton onClick={handleLogOut}>
              <LogoutIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Tooltip>
      </div>
    </HeaderStyled>
  );
};
