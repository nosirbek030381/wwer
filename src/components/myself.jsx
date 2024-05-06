import { ArrowBack } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import cryptoJS from 'crypto-js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://no23.lavina.tech';
const signUpData = localStorage.getItem('signupData');
const parseSignUp = JSON.parse(signUpData);

const key = parseSignUp?.key;
const secret = parseSignUp?.secret;

const createSign = (method, url, body, userSecret) => {
	return cryptoJS.MD5(`${method}${url}${body}${userSecret}`).toString();
};

const Myself = () => {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const fetchUserData = async () => {
			const url = '/myself';
			const method = 'GET';
			const body = '';

			const sign = createSign(method, url, body, secret);

			const response = await fetch(`${BASE_URL}/myself`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Key: key,
					Sign: sign,
				},
			});

			const { data } = await response.json();
			setUserData(data);
		};

		fetchUserData();
	}, []);

	return (
		<>
			<Link
				to={'/'}
				style={{
					display: 'flex',
					alignItems: 'center',
					marginLeft: 8,
					color: 'white',
				}}
			>
				<ArrowBack sx={{ ':hover': { color: 'blue' } }} /> Back home
			</Link>
			<Container sx={{ mt: 20 }}>
				{userData && (
					<>
						<Typography
							variant='body1'
							sx={{
								display: 'flex',
								color: 'white',
								fontSize: '20px',
								alignItems: 'center',
							}}
						>
							Name:{' '}
							<Typography
								sx={{ color: 'white', fontSize: '20px', px: 2, textTransform: 'uppercase' }}
							>
								{userData.name}
							</Typography>
						</Typography>
						<Typography
							variant='body1'
							sx={{
								display: 'flex',
								color: 'white',
								fontSize: '20px',
								alignItems: 'center',
							}}
						>
							Email:{' '}
							<Typography
								sx={{ color: 'white', fontSize: '20px', px: 2, textTransform: 'uppercase' }}
							>
								{userData.email}
							</Typography>
						</Typography>
					</>
				)}
			</Container>
		</>
	);
};

export default Myself;
