import { LockOutlined } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BASE_URL = 'https://no23.lavina.tech';

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [key, setKey] = useState('');
	const [secret, setSecret] = useState('');
	const navigate = useNavigate();

	const handleNameChange = e => {
		setName(e.target.value);
	};

	const handleEmailChange = e => {
		setEmail(e.target.value);
	};

	const handleKeyChange = e => {
		setKey(e.target.value);
	};

	const handleSecretChange = e => {
		setSecret(e.target.value);
	};

	const signUp = async () => {
		const body = {
			name: name,
			email: email,
			key: key,
			secret: secret,
		};

		const response = await fetch(`${BASE_URL}/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		console.log(await response.json());
		localStorage.setItem('signupData', JSON.stringify(body));
		navigate('/');
		setName('');
		setEmail('');
		setKey('');
		setSecret('');
	};

	return (
		<Box>
			<Container component='main' maxWidth='xs' sx={{ backgroundColor: 'white', borderRadius: 3 }}>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 15,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlined />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<Box component='form' onSubmit={signUp} noValidate sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='name'
							label='Name'
							autoComplete='name'
							autoFocus
							value={name}
							onChange={handleNameChange}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='email'
							label='Email'
							type='email'
							autoComplete='email'
							value={email}
							onChange={handleEmailChange}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Key'
							type='password'
							autoComplete='current-password'
							value={key}
							onChange={handleKeyChange}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='secret'
							label='Secret'
							type='password'
							autoComplete='current-password'
							value={secret}
							onChange={handleSecretChange}
						/>
						<Button onClick={signUp} fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
						<Grid container sx={{ mb: 3 }}>
							<Grid item xs>
								<Link to='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link to='#' variant='body2'>
									{"Don't have an account? Sign in"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Signup;
