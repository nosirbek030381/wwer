import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, createSign } from '../services/auth.service';

const signUpData = localStorage.getItem('signupData');
const parseSignUp = JSON.parse(signUpData);

const key = parseSignUp?.key;
const secret = parseSignUp?.secret;

const CreateBook = () => {
	const [isbn, setIsbn] = useState('');
	const navigate = useNavigate();

	const createBook = async isbn => {
		const url = '/books';
		const method = 'POST';
		const body = {
			isbn: isbn,
		};

		const sign = createSign(method, url, JSON.stringify(body), secret);

		const response = await fetch(`${BASE_URL}/books`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Key: key,
				Sign: sign,
			},
			body: JSON.stringify(body),
		});

		console.log(await response.json());
		localStorage.setItem('books', JSON.stringify(body));
		navigate('/');
		console.log();
		setIsbn('');
		window.location.reload();
	};

	const handleIsbnChange = e => {
		setIsbn(e.target.value);
	};

	const handleCreateBook = () => {
		createBook(isbn);
	};

	return (
		<Box>
			<Typography>ISBN</Typography>
			<TextField
				fullWidth
				type='text'
				placeholder='ISBN'
				value={isbn}
				onChange={handleIsbnChange}
			/>
			<Box sx={{ mt: 2 }}>
				<Button variant='outlined' onClick={handleCreateBook}>
					Create Book
				</Button>
			</Box>
		</Box>
	);
};

export default CreateBook;
