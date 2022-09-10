import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { GetArticles } from './models';

const apiUrl = 'https://api.nytimes.com/svc/';
const apiKey = '8lT8noO1AiSA1FYcc5ltSUwz2NGj9fzU'

export const getArticles = (): AxiosPromise<GetArticles> => {
	return axios.get(`${apiUrl}mostpopular/v2/viewed/1.json?api-key=${apiKey}`)
	.then((res: AxiosResponse<GetArticles>) => res)
	.catch(err => err)
} 