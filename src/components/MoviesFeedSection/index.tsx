import { debounce } from 'lodash';
import { FC } from 'react';



import { Button } from '@components/Button';
import { MovieCardsContainer } from '@components/MovieCardsContainer';
import { SearchBar } from '@components/SearchBar';
import { Select } from '@components/Select';
import { StyledContainer } from '@components/Styleds/Container/styled';
import { FilterAndSortPanel } from '@components/Styleds/FilterAndSortPanel';



import { genre, isDesktop, queryMovieName, resetParamsState, setGenre, setMovies, setPage, setQueryMovieName, setSortField } from '../../redux/slices/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';


export type TSortingOptions = 'по популярности' | 'по рейтингу' | 'по алфавиту' | 'по дате релиза';

const SortingOptionsDictionary: Record<TSortingOptions, string> = {
	'по популярности': 'votes.imdb',
	'по рейтингу': 'rating.imdb',
	'по алфавиту': 'name',
	'по дате релиза': 'year',
};
const genresTitles = ['все', 'драма', 'фантастика', 'приключения', 'ужасы', 'триллер', 'боевик'];
const sortingOptions = ['по популярности', 'по рейтингу', 'по алфавиту', 'по дате релиза'];

export const MoviesFeedSection: FC = () => {
	const dispatch = useAppDispatch();
	const selectGenre = useAppSelector(genre);
	const selectQueryMovie = useAppSelector(queryMovieName);


	const handleInputChange = debounce((value: string) => {
		dispatch(resetParamsState());
		dispatch(setGenre('все'));
		dispatch(setSortField('votes.imdb'));
		dispatch(setQueryMovieName(value));
	}, 1000);

	return (
		<StyledContainer
			$display='fl'
			$flex='col'
			$align='center'
			$justify='fl-st'
			$margin={['2rem', '2rem', '0']}
			$height='100%'
		>
			<FilterAndSortPanel
				$width='100%'
				$margin={['0', '0', '2rem', '0']}
				$display='fl'
				$flex='rw'
				$align='fl-st'
				$justify='center'
				$wrap='wr'
				$gap='2rem'
			>
				{useAppSelector(isDesktop) ? (
					<StyledContainer $display={'fl'}>
						{genresTitles.map((title) => (
							<StyledContainer $display='block' $margin={['0', '5px']} key={title}>
								<Button
									$color='secondary'
									title={title}
									size='btn-sm'
									onClick={() => {
										dispatch(resetParamsState());
										dispatch(setGenre(title));
									}}
									active={selectGenre === title}
									disabled={!!selectQueryMovie}
								/>
							</StyledContainer>
						))}
					</StyledContainer>
				) : (
					<StyledContainer $display={'block'}>
						<Select
							styleType='secondary'
							options={genresTitles}
							handleSelect={(option) => {
								dispatch(resetParamsState());
								dispatch(setGenre(option));
							}}
							disabled={!!selectQueryMovie}
						/>
					</StyledContainer>
				)}
				<Select
					styleType='secondary'
					options={sortingOptions}
					handleSelect={(option: string) => {
						const sortingOption = option as TSortingOptions;
						dispatch(resetParamsState());
						dispatch(setSortField(SortingOptionsDictionary[sortingOption]));
					}}
					disabled={!!selectQueryMovie}
				/>
			</FilterAndSortPanel>
			<>
				<StyledContainer
					$display='block'
					$margin={useAppSelector(isDesktop) ? ['0', '0', '4rem', '0'] : ['0', '0', '2rem', '0']}
					$width='100%'
				>
					<SearchBar
						placeholder='Все фильмы'
						onChange={handleInputChange}
						isDesktop={useAppSelector(isDesktop)}
					/>
				</StyledContainer>

				<MovieCardsContainer />
			</>
		</StyledContainer>
	);
};