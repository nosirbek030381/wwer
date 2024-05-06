import { Box, Button, Container } from '@mui/material';
import Card from '@mui/material/Card';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL, createSign } from '../services/auth.service';

const signUpData = localStorage.getItem('signupData');
const parseSignUp = JSON.parse(signUpData);

const key = parseSignUp?.key;
const secret = parseSignUp?.secret;

const BasicCard = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const getBooks = async () => {
			const url = '/books';
			const method = 'GET';
			const body = '';

			const sign = createSign(method, url, body, secret);

			const response = await fetch(`${BASE_URL}/books`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Key: key,
					Sign: sign,
				},
			});

			const { data } = await response.json();
			setBooks(data);
		};

		getBooks();
	}, []);

	// Delete book

	const deleteBook = async slug => {
		const id = slug;
		const url = `/books/${id}`;
		const method = 'DELETE';
		const body = '';

		const sign = createSign(method, url, body, secret);

		const res = await fetch(`${BASE_URL}/books/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Key: key,
				Sign: sign,
			},
		});

		if (res.ok) {
			setBooks(books.filter(book => book.book.id !== id));
			toast('Book deleted successfully.');
		} else {
			console.error('Failed to delete book.');
		}
	};

	// Edit nima qilishi ko'rsatilmagan ekan

	// const editBook = async slug => {
	// 	const id = slug;
	// 	const url = `/books/${id}`;
	// 	const method = 'PATCH';
	// 	const body = {
	// 		status: 0,
	// 	};

	// 	const sign = createSign(method, url, JSON.stringify(body), secret);

	// 	const response = await fetch(`${BASE_URL}/books/${id}`, {
	// 		method: 'PATCH',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Key: key,
	// 			Sign: sign,
	// 		},
	// 		body: JSON.stringify(body),
	// 	});

	// 	if (response.ok) {
	// 		toast('Book edited successfully.');
	// 	} else {
	// 		console.error('Failed to edit book.');
	// 	}
	// };

	return (
		<Container sx={{ mt: 6 }}>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
				{books &&
					books.length &&
					books.map((book, index) => (
						<Card sx={{ width: 300, flex: '1 1 auto', maxWidth: '100%' }} key={index}>
							<Box sx={{ p: 2 }}>
								<h3>{book.book.title}</h3>
								<p>Pages: {book.book.pages}</p>
								<p>Cover: {book.book.cover}</p>
								<p>Published: {book.book.published}</p>
								<p>Isbn: {book.book.isbn}</p>
								<Box sx={{ display: 'flex', mt: 4, justifyContent: 'space-between' }}>
									<p>{book.book.author}</p>
									<Button
										variant='contained'
										color='error'
										onClick={() => deleteBook(book.book.id)}
									>
										Delete
									</Button>
								</Box>
							</Box>
						</Card>
					))}
			</Box>
		</Container>
	);
};

export default BasicCard;
