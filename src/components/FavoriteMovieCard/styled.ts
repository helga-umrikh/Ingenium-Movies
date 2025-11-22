import styled from 'styled-components';

import * as styleVariables from '../../constants/variables';

export const StyledFavoriteMovieCard = styled.div`
	width: 100%;
	max-width: 300px;
	position: relative;
	margin: 0 0 1rem 0;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: ${styleVariables.WHITE};
	border-radius: 3px;

	& picture {
		border-radius: 3px;
		width: 150px;
		height: 225px;

		img {
			width: inherit;
			height: inherit;
		}
	}

	> div:nth-child(2) {
		height: 100%;
		flex: 1;
		text-align: center;
	}

	p:first-of-type {
		color: ${styleVariables.BLACK};
		margin: 0 0 0.5rem 0;
		font-size: 1.5rem;
	}

	p:nth-child(2) {
		color: ${styleVariables.BLACK};
		margin: 0 0 1.5rem 0;
	}

	p:nth-child(3) {
		font-family: ${styleVariables.monoton};
		font-size: 1.5rem;
		margin: 0 0 1.5rem 0;
		color: ${styleVariables.DEEP_BLUE};
	}

	button {
		position: absolute;
		right: 10px;
	}

	@media screen and (min-width: ${styleVariables.DESKTOP_MIN}px) {
		max-width: none;
		flex-direction: row;

		& picture {
			margin: 0 3rem 0 0;
		}

		> div:nth-child(2) {
			height: 100%;
			flex: 1;
			text-align: start;
		}

		button {
			position: static;
		}
	}
`;
