import React, { FC } from 'react';
import { TMovieInfo } from 'src/api/responseTypes';

import { FavoriteMoviesCardsContainer } from '@components/FavoriteMoviesCardsContainer';
import { Heading } from '@components/Heading';
import { StyledContainer } from '@components/Styleds/Container/styled';

import { isDesktop } from '../../redux/slices/moviesSlice';
import { useAppSelector } from '../../redux/store';

type TFavoriteMoviesSectionProps = {
	moviesData?: TMovieInfo[];
};

export const FavoriteMoviesSection: FC<TFavoriteMoviesSectionProps> = ({ moviesData }) => {
	const durations =
		moviesData &&
		moviesData.reduce(
			(accumulator, movieData) =>
				accumulator +
				(movieData && movieData.movieLength && movieData.movieLength !== null
					? movieData.movieLength
					: 0),
			0
		);

	return (
		<StyledContainer $display='fl' $flex='col' $justify='fl-st' $margin={['3rem', '2rem', '3rem']}>
			<Heading title={'Избранное'} $bordered={true} />

			{moviesData && moviesData.length && <FavoriteMoviesCardsContainer moviesData={moviesData} />}

			<StyledContainer
				$display='fl'
				$flex={`${useAppSelector(isDesktop) ? 'rw' : 'col'}`}
				$align={`${useAppSelector(isDesktop) ? 'fl-st' : 'center'}`}
				$justify='betw'
			>
				<p>Всего фильмов: {moviesData && moviesData.length}</p>
				<p>Общее время: {durations}мин</p>
			</StyledContainer>
		</StyledContainer>
	);
};
