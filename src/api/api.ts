import { baseUrl } from './baseUrl';
import { TMoviesData } from './responseTypes';

type TFetchProps = {
	params?: TParams;
	selectedFields?: string[];
	notNullFields?: string[];
};

export type TParams = {
	page: number;
	limit: number;
	'genres.name'?: string[];
	sortField?: string;
	sortType?: string;
	movieLength?: string[];
	'rating.imdb'?: string[];
	'votes.imdb'?: string[];
	query?: string;
};

export const fetchKinopoiskAPI = async ({
	params,
	selectedFields,
	notNullFields,
}: TFetchProps): Promise<TMoviesData> => {
	const stringParams =
		params &&
		Object.fromEntries(Object.entries(params).map(([key, value]) => [key, String(value)]));

	const parameters = params ? new URLSearchParams(stringParams) : '';

	let url = '';

	const selectedFieldsString =
		selectedFields && selectedFields.map((field: string) => `&selectFields=${field}`).join('');

	const notNullFieldsString =
		notNullFields && notNullFields.map((field: string) => `&notNullFields=${field}`).join('');

	if (baseUrl) {
		if (params && params.query) {
			url = `${baseUrl}/search?${parameters}`;
		} else if (baseUrl) {
			url = `${baseUrl}?${parameters}${selectedFieldsString}${notNullFieldsString}`;
		}
	} else {
		throw new Error('Base URL is not defined');
	}

	const token: string = process.env.REACT_APP_ACCESS_KEY || '';

	const headers = new Headers();
	headers.set('X-API-KEY', token);
	headers.set('accept', 'application/json');
	headers.set('Accept', '*');

	try {
		const response = await fetch(url, {
			headers,
		});

		if (!response.ok) {
			throw new Error(`${response.status}`);
		}

		return response.json();
	} catch (error) {
		throw error;
	}
};
