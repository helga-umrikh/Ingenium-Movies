import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '@components/Header';
import { StyledContainer } from '@components/Styleds/Container/styled';

import { GlobalStyles } from './constants/globalStyles';
import { DARK_THEME } from './constants/variables';
import { updateResponsive } from './redux/slices/moviesSlice';
import { useAppDispatch } from './redux/store';
import { AppRouter } from './router';

export const App = () => {
	const dispatch = useAppDispatch();

	const handleResize = () => {
		dispatch(updateResponsive(window.innerWidth));
	};

	window.addEventListener('resize', handleResize);

	return (
		<ThemeProvider theme={DARK_THEME}>
			<GlobalStyles />
			<StyledContainer $display='fl' $flex='col' $align='center' $height='100%'>
				<Header />
				<AppRouter />
			</StyledContainer>
		</ThemeProvider>
	);
};
