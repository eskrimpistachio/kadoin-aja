import axios from 'axios';

export const api = axios.create({
	baseURL:
		'http://870e-140-213-188-9.ngrok.io/api/v1',
	headers: {
		'Content-Type': 'application/json',
	},
});
