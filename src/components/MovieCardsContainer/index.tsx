import React, { FC, useEffect, useRef, useState } from 'react';

import { Heading } from '@components/Heading';
import { MovieCard } from '@components/MovieCard';
import { Spinner } from '@components/Spinner';
import { StyledContainer } from '@components/Styleds/Container/styled';

import {
	error,
	isDesktop,
	isLastPageReached,
	loading,
	movies,
	page,
	pages,
	setPage,
} from '../../redux/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export const MovieCardsContainer: FC = () => {
	const [lastMovieCardRef, setLastMovieCardRef] = useState<HTMLDivElement | null>(null);

	const dispatch = useAppDispatch();
	const selectPage = useAppSelector(page);
	const selectPages = useAppSelector(pages);
	const selectMovies = useAppSelector(movies);
	const selectLoading = useAppSelector(loading);
	const selectError = useAppSelector(error);
	const selectIsDesktop = useAppSelector(isDesktop);
	const selectIsLastPageReached = useAppSelector(isLastPageReached);

	const options: IntersectionObserverInit = {
		root: null,
		rootMargin: '0px',
		threshold: 1.0,
	};

	const updateCurrentPage = () => {
		if (!selectIsLastPageReached) {
			dispatch(setPage(selectPage + 1));
		}
	};

	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (!selectIsLastPageReached) {
			observer.current = new IntersectionObserver((entries) => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					updateCurrentPage();
				}
			}, options);

			const currentElement = lastMovieCardRef;
			const currentObserver = observer.current;

			if (currentElement) {
				currentObserver.observe(currentElement);
			}

			return () => {
				if (currentElement) {
					currentObserver.unobserve(currentElement);
				}
			};
		} else if (selectPages && selectPage >= selectPages) {
			// отключение наблюдения за элементом
			const currentElement = lastMovieCardRef;
			const currentObserver = observer.current;
			if (currentElement && currentObserver) {
				currentObserver.unobserve(currentElement);
			}
			// отключение обсервера
			observer.current && observer.current.disconnect();
		} else if (observer.current) {
			observer.current.disconnect();
		}
	}, [lastMovieCardRef, selectIsLastPageReached]);

	return (
		<>
			{/* если запрос успешный БЕЗ фильмов*/}

			{!selectLoading && selectMovies.length === 0 && !selectError && (
				<StyledContainer $display='fl' $align='center' $justify='center' $margin={['2rem', '3rem']}>
					<Heading $justify='center' title={' К сожалению, по вашему запросу ничего не найдено'} />
				</StyledContainer>
			)}

			{/* если есть ОШИБКА */}

			{!selectLoading && selectError.length > 0 && (
				<Heading title={`Произошла небольшая ошибка ${selectError}!`} />
			)}

			{/* Фильмы */}

			{!selectError.length && selectMovies.length > 0 && (
				<>
					<StyledContainer
						$width={selectIsDesktop ? '100%' : ''}
						$display='grid'
						$grid={['col', `repeat(auto-fill, minmax(${selectIsDesktop ? '280px' : '180px'},1fr))`]}
						$justifyItems='center'
						$gap={`4rem ${selectIsDesktop ? '1rem' : ''}`}
					>
						{selectMovies.map((movie, index) => {
							return index === selectMovies.length - 1 ? (
								<MovieCard
									movie={movie}
									key={movie.id}
									ref={(movieCard) => {
										setLastMovieCardRef(movieCard);
									}}
								/>
							) : (
								<MovieCard movie={movie} key={movie.id} />
							);
						})}
					</StyledContainer>
				</>
			)}

			{selectLoading && (
				<StyledContainer $display='block' $width='100%' $margin={['auto']} $padding={['2rem']}>
					<Spinner maxwidth='100px' maxheight='100px' />
				</StyledContainer>
			)}
		</>
	);
};
