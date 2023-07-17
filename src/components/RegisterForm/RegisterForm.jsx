import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/operations';
import { Label, RegisterContainer, Form, Input, ButtonBox } from './RegisterForm.styled';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { NavLink } from 'react-router-dom';
import { handleError } from 'redux/auth/authSlice';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const isAuthError = useSelector(state => state.auth.isAuthError)

	useEffect(() => {
		if(isAuthError) {
			alert('A user with this name or email address already exists');
			dispatch(handleError(!isAuthError))
		}
	}, [isAuthError, dispatch])
  
  const handleRegisterForm = event => {
    event.preventDefault();
    dispatch(operations.register({ name, email, password }));
		setName('');
		setEmail('');
		setPassword('')
  };

  return (
    <RegisterContainer>
      <h2>Registration Form</h2>
      <Form onSubmit={handleRegisterForm}>
        <Label>
          Username
          <Input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Label>
        <ButtonBox>
				  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      			  <Button type="submit">Register</Button>
    		  </Box>
          <NavLink to="/" styled={{hight: 40, verticalAlign: "bottom"}}>Go back</NavLink>
        </ButtonBox>
      </Form>
    </RegisterContainer>
  );
};

