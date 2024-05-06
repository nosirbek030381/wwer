import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import notFound from '../assets/404.svg';

const Page404 = () => {
	const navigate = useNavigate();

	return (
		<Box
			height={'90vh'}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			flexDirection={'column'}
		>
			<img src={notFound} alt='404 Page Not Found' />

			<Box mt={6}>
				<Button
					variant={'contained'}
					color={'primary'}
					sx={{ mt: 2, mx: 5 }}
					onClick={() => navigate('/')}
				>
					Go to Homepage
				</Button>

				<Button
					variant={'outlined'}
					color={'primary'}
					sx={{ mt: 2 }}
					onClick={() => window.location.reload()}
				>
					Reload
				</Button>
			</Box>
		</Box>
	);
};

export default Page404;
