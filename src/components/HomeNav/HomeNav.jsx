import { ContainerHome, LoginBox, RegistredBox, Title } from './HomeNav.styled';
import { NavLink } from 'react-router-dom';

export const HomeNav = () => {
  return (
    <ContainerHome>
      <div>
        <Title>Phonebook</Title>
        <h2>Best Contact Management App to Organize Your Contacts</h2>
        <h4>You need to log into existing account or register one </h4>
      </div>
      <div>
        <RegistredBox>
          <NavLink to="/register">Register</NavLink>
        </RegistredBox>
        <LoginBox>
          <NavLink to="/login">Log In</NavLink>
        </LoginBox>
      </div>
    </ContainerHome>
  );
};
