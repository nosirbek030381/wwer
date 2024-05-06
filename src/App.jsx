import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Home, Myself, Navbar, SignUp } from './components';

const App = () => {
	return (
		<Box>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/myself' element={<Myself />} />
			</Routes>
		</Box>
	);
};

export default App;
