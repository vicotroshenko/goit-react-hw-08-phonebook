import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/operations';
import {
  Label,
  RegisterContainer,
  Form,
  Input,
  ButtonBox,
} from './RegisterForm.styled';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { NavLink } from 'react-router-dom';
import { handleError } from 'redux/auth/authSlice';
import { Tooltip } from '@mui/material';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const isAuthError = useSelector(state => state.auth.isAuthError);

  useEffect(() => {
    if (isAuthError) {
      alert('A user with this name or email address already exists');
      dispatch(handleError(!isAuthError));
    }
  }, [isAuthError, dispatch]);

  const handleRegisterForm = event => {
    event.preventDefault();
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterContainer>
      <h2>Registration Form</h2>
      <Form onSubmit={handleRegisterForm}>
        <Tooltip
          title="Name must be at least 5 characters in length, but can be much longer"
          placement="top"
        >
          <Label>
            Username
            <Input
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Label>
        </Tooltip>
        <Tooltip title="Example: across@mail.com" placement="top">
          <Label>
            Email
            <Input
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </Label>
        </Tooltip>

        <Tooltip
          title="Passwords must contain: a minimum of 1 numeric character [0-9] and must be at least 8 characters in length, but can be much longer."
          placement="top"
        >
          <Label>
            Password
            <Input
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </Label>
        </Tooltip>

        <ButtonBox>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button type="submit">Register</Button>
          </Box>
          <NavLink to="/" styled={{ hight: 40, verticalAlign: 'bottom' }}>
            Go back
          </NavLink>
        </ButtonBox>
      </Form>
    </RegisterContainer>
  );
};
