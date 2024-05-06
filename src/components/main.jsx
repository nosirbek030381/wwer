import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicCard from './card';
import ModalOpen from './modal';

const Home = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const signUpData = localStorage.getItem('signupData');
		const parseSignUp = JSON.parse(signUpData);

		const key = parseSignUp?.key;
		const secret = parseSignUp?.secret;

		if (!key || !secret) {
			navigate('/signup');
		}
	}, [navigate]);

	return (
		<Box>
			<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} px={5} mt={3}>
				<Box sx={{ color: 'white' }}>
					<h1>Welcome to Bookstore</h1>
					<p>Find your favorite books and create new ones.</p>
				</Box>
				<Box>
					<Button
						sx={{
							bgcolor: 'blue',
							color: 'white',
							fontWeight: 'bold',
							':hover': { color: 'black' },
						}}
					>
						{' '}
						<ModalOpen />
					</Button>
				</Box>
			</Box>
			<Box>
				<BasicCard />
			</Box>
		</Box>
	);
};

export default Home;
