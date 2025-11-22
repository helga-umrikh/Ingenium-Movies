import styled from 'styled-components';

import { StyledContainer } from '@components/Styleds/Container/styled';

import * as styleVariables from '../../constants/variables';

export const StyledEmptyFavoriteMovieSection = styled(StyledContainer)`
	h3 {
		font-size: 1.5rem;
		text-align: center;
		margin: 0 0 1rem 0px;
	}

	p {
		max-width: none;
		margin: 0 0 1rem 0;
		font-size: 1rem;
		text-align: center;
	}

	picture:nth-of-type(1) {
		width: 40px;
		margin: 0 0 1rem 0;
		display: block;
		text-align: center;

		img {
			margin: 0;
			height: inherit;
			width: inherit;
		}
	}

	picture:nth-of-type(2) {
		width: 70%;
		margin: 0 0 1rem 0;
		text-align: center;

		img {
			margin: 0;
			width: inherit;
			height: inherit;
		}
	}

	@media screen and (min-width: ${styleVariables.DESKTOP_MIN}px) {
		h3 {
			font-size: 2rem;
		}
		p {
			max-width: 710px;
			margin: 0 0 4rem 0;
			font-size: 1.5rem;
		}

		picture {
			width: 300px;
		}

		picture:nth-of-type(2) {
			width: 60%;
		}
	}
`;
