type TRating = {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await?: number;
};

type TPoster = {
	url: string | null;
	previewUrl: string | null;
};

type Votes = {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await?: number;
};

type Genre = {
	name: string;
};

type Country = {
	name: string;
};

export type TActor = {
	id: number;
	photo: string;
	name: string;
	enName: string;
	description: string;
	profession: string;
	enProfession: string;
};

export type TMovieInfo = {
	id: number;
	name?: string | null;
	enName?: string | null;
	alternativeName?: string;
	shortDescription?: string;
	poster?: TPoster | null;
	ageRating?: number | null;
	movieLength?: number | null;
	genres?: Genre[] | null;
	countries?: Country[] | null;
	year?: number | null;
	rating?: TRating | null;
	votes: Votes;
};

export type TMoviesData = {
	docs: TMovieInfo[];
	total: number;
	limit?: number;
	page: number;
	pages: number;
};
