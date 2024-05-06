import cryptoJS from 'crypto-js';
export const BASE_URL = 'https://no23.lavina.tech';

const signUpData = localStorage.getItem('signupData');
const parseSignUp = JSON.parse(signUpData);

const key = parseSignUp.key;
const secret = parseSignUp.secret;

// // sign up
// const signUp = async () => {
// 	const body = {
// 		name: 'Abduraxmon',
// 		email: 'abduraimovabdurahmon@gmail.com',
// 		key: key,
// 		secret: secret,
// 	};

// 	const response = await fetch(`${BASE_URL}/signup`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(body),
// 	});

// 	console.log(await response.json());
// };

// signUp();

// {
//     data: {
//       email: 'abduraimovabdurahmon@gmail.com',
//       id: 112,
//       key: 'test1',
//       name: 'Abduraxmon',
//       secret: 'test1'
//     },
//     isOk: true,
//     message: 'ok'
//  }

// mySelf

export const createSign = (method, url, body, userSecret) => {
	return cryptoJS.MD5(`${method}${url}${body}${userSecret}`).toString();
};

// const mySelf = async () => {
// 	const url = '/myself';
// 	const method = 'GET';
// 	const body = '';

// 	const sign = createSign(method, url, body, secret);

// 	const response = await fetch(`${BASE_URL}/myself`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Key: key,
// 			Sign: sign,
// 		},
// 	});

// 	console.log(await response.json());
// };

// mySelf();

// const createBook = async () => {
// 	const url = '/books';
// 	const method = 'POST';
// 	const body = {
// 		isbn: '9781118464465',
// 	};

// 	const sign = createSign(method, url, JSON.stringify(body), secret);

// 	const response = await fetch(`${BASE_URL}/books`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Key: key,
// 			Sign: sign,
// 		},
// 		body: JSON.stringify(body),
// 	});

// 	console.log(await response.json());
// };

// createBook();

// const getBooks = async () => {
// 	const url = '/books';
// 	const method = 'GET';
// 	const body = '';

// 	const sign = createSign(method, url, body, secret);

// 	const response = await fetch(`${BASE_URL}/books`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Key: key,
// 			Sign: sign,
// 		},
// 	});

// 	console.log((await response.json()).data[0].book);
// };

// getBooks();

// RESPONSE

// {
//     author: 'Eben Upton',
//     cover: 'https://covers.openlibrary.org/b/id/7605922-M.jpg',
//     id: 15,
//     isbn: '9781118464465',
//     pages: 264,
//     published: 2012,
//     title: 'Raspberry Pi User Guide'
//   }

export const search = async () => {
	const title = 'Free Pass';
	const url = `/books/${title}`;
	const method = 'GET';
	const body = '';

	const sign = createSign(method, url, body, secret);

	const response = await fetch(`${BASE_URL}/books/${title}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Key: key,
			Sign: sign,
		},
	});

	console.log(await response.json());
};

search();

// const editBook = async () => {
// 	const id = 15;
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

// 	console.log(await response.json());
// };

// editBook();

// RESPONSE

// {
//     data: {
//       book: {
//         author: 'Eben Upton',
//         cover: 'https://covers.openlibrary.org/b/id/7605922-M.jpg',
//         id: 15,
//         isbn: '9781118464465',
//         pages: 264,
//         published: 2012,
//         title: 'Raspberry Pi User Guide'
//       },
//       status: 0
//     },
//     isOk: true,
//     message: 'ok'
//   }

// const deleteBook = async () => {
// 	const id = 59;
// 	const url = `/books/${id}`;
// 	const method = 'DELETE';
// 	const body = '';

// 	const sign = createSign(method, url, body, secret);

// 	const response = await fetch(`${BASE_URL}/books/${id}`, {
// 		method: 'DELETE',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Key: key,
// 			Sign: sign,
// 		},
// 	});

// 	console.log(await response.json());
// };

// deleteBook();

// RESPONSE

// { data: [], isOk: true, message: 'ok' }
