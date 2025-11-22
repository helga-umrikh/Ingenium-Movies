import styled from 'styled-components';

import { StyledContainer } from '@components/Styleds/Container/styled';

import * as styleVariables from '../../constants/variables';

export const StyledMovieCardCover = styled(StyledContainer)`
	position: absolute;
	top: 0;
	opacity: 0;

	> div:nth-child(2) {
		& p {
			margin: 0 0 0.4rem 0;
		}
		> p:nth-child(1) {
			font-size: 1.5rem;
			font-family: ${styleVariables.monoton};
		}
	}
`;

export const StyledMovieCard = styled(StyledContainer)`
	cursor: pointer;

	picture {
		width: 100%;
		height: 100%;
		display: block;
		background: ${({ theme }) => theme.colors.mainColor};

		* {
			object-fit: cover;
		}
	}

	img {
		width: 100%;
		height: 100%;
	}

	p {
		font-family: ${styleVariables.mulish};
		font-size: 1rem;
		text-wrap: wrap;

		/*For Safari < 17*/
		word-wrap: break-word;
	}

	> p:nth-of-type(1)  {
		text-align: center;
	}

	&:hover {
		picture {
			opacity: 0.4;
		}
		${StyledMovieCardCover} {
			opacity: 1;
		}
	}
`;
