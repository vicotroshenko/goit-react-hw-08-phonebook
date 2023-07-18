import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import operations from "redux/auth/operations";
import { LoginContainer, Form, Label, Input, ButtonBox } from "./LoginForm.styled";
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { NavLink } from "react-router-dom";
import { handleError } from "redux/auth/authSlice";


export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const isAuthError = useSelector(state => state.auth.isAuthError)


	useEffect(() => {
		if(isAuthError) {
			alert('Incorrect username or password');
			dispatch(handleError(!isAuthError))
		}
	}, [isAuthError, dispatch])
	



	const handleLogin = (event) => {
		event.preventDefault()
		dispatch(operations.logIn({ email, password }))
		setEmail('');
		setPassword('');
	}

	return (<LoginContainer>
		<h2>Login</h2>
		<span>Hi, I missed you</span>
		<Form onSubmit={handleLogin}>
			<Label >Email
				<Input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
			</Label>
			<Label htmlFor="">Password
				<Input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
			</Label>
			<ButtonBox>
				  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      			  <Button type="submit">Submit</Button>
    		  </Box>
          <NavLink to="/" styled={{hight: 40, verticalAlign: "bottom"}}>Go back</NavLink>
        </ButtonBox>
		</Form>
	</LoginContainer>

	)
}
