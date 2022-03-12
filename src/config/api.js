import axios from 'axios';

export const tweetAPI = axios.create({
	baseURL:
		'http://c295-140-213-188-9.ngrok.io/api/v1/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Content-Type': 'application/json',
	},
});
