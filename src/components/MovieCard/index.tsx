import React, { FC, useState } from 'react';
import { TMovieInfo } from 'src/api/responseTypes';

import { Banner } from '@components/Banner';
import { StyledContainer } from '@components/Styleds/Container/styled';

import { favoriteMovies, isDesktop, toggleFavoriteMovie } from '../../redux/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { StyledMovieCard, StyledMovieCardCover } from './styled';
import movie_icon from '@assets/movie_icon.png';
import heart_filled from '@assets/heart_filled.svg';
import heart from '@assets/heart.svg';

type TMovieCardProps = {
	movie: TMovieInfo;
};

export const MovieCard = React.forwardRef(
	({ movie }: TMovieCardProps, ref: React.Ref<HTMLDivElement>) => {
		const dispatch = useAppDispatch();
		const selectIsDesktop = useAppSelector(isDesktop);
		const favorites = useAppSelector(favoriteMovies);
		const [imageError, setImageError] = useState<boolean>(false);
		const {
			id,
			name,
			enName,
			alternativeName,
			poster,
			ageRating,
			movieLength,
			genres,
			countries,
			year,
			rating,
		} = movie;

		return (
			<StyledMovieCard
				$display='fl'
				$flex='col'
				$align='center'
				$justify='fl-st'
				ref={ref}
				$width={`${selectIsDesktop ? '280px' : '180px'}`}
				$height={`${selectIsDesktop ? '480px' : '315px'}`}
			>
				<StyledContainer
					$display='block'
					$position='rel'
					$width={`100%`}
					$height={`85%`}
					$margin={['0', '0', '1rem', '0']}
				>
					<picture>
						<source
							srcSet={
								imageError
									? movie_icon
									: poster && poster.url
										? poster.url
										: movie_icon
							}
						/>
						<img
							src={
								imageError
									? movie_icon
									: poster && poster.url
										? poster.url
										: movie_icon
							}
							alt='no poster movie tape icon'
							onError={() => {
								setImageError(true);
							}}
						/>
					</picture>
					{typeof ageRating !== 'number' && <Banner title={`${ageRating}+`} />}
					<StyledMovieCardCover
						$width='100%'
						$height='100%'
						$display='fl'
						$flex='col'
						$justify='betw'
						$align='fl-end'
					>
						<StyledContainer
							$display='block'
							$width='40px'
							$height='40px'
							$margin={['1rem']}
							onClick={() => {
								dispatch(toggleFavoriteMovie(movie));
							}}
						>
							<img
								src={favorites.some((favoriteMovie) => favoriteMovie.id === movie.id) ? heart_filled : heart}
								alt='bookmark'
							/>
						</StyledContainer>
						<StyledContainer $display='block' $width='inherit' $padding={['1rem']}>
							<p>{rating?.imdb.toFixed(1)}</p>
							<p>
								{year ? `${year}, ` : ''}
								{countries && countries.length ? `${countries[0].name}, ` : ''}
								{genres && genres.length ? `${genres[0].name} ` : ''}
							</p>
							{movieLength && <p>{movieLength} мин.</p>}
						</StyledContainer>
					</StyledMovieCardCover>
				</StyledContainer>
				<p>{name || alternativeName || enName}</p>
			</StyledMovieCard>
		);
	}
);
