import React, { FC } from 'react';
import { TMovieInfo } from 'src/api/responseTypes';

import { FavoriteMovieCard } from '@components/FavoriteMovieCard';
import { StyledContainer } from '@components/Styleds/Container/styled';

import { isDesktop, removeFavoriteMovie } from '../../redux/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

type TFavoriteMoviesCradsContainerProps = {
	moviesData?: TMovieInfo[];
};

export const FavoriteMoviesCardsContainer: FC<TFavoriteMoviesCradsContainerProps> = ({
	moviesData,
}) => {
	const dispatch = useAppDispatch();

	return (
		<StyledContainer
			$display='fl'
			$flex='col'
			$align={`${useAppSelector(isDesktop) ? 'stretch' : 'center'}`}
			$margin={['0', '0', '2rem', '0']}
		>
			{moviesData &&
				moviesData.map((movie: TMovieInfo) => (
					<FavoriteMovieCard
						movie={movie}
						onClick={() => {
							dispatch(removeFavoriteMovie(movie));
						}}
					></FavoriteMovieCard>
				))}
		</StyledContainer>
	);
};
