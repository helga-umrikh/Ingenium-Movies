import styled from 'styled-components';

import { StyledContainer } from '@components/Styleds/Container/styled';

import * as styleVariables from '../../constants/variables';

export type TStyledSearchInputProps = { isDesktop: boolean };

export const StyledSearchInput = styled.input<TStyledSearchInputProps>`
	width: inherit;
	padding: 0 40px 0.5rem 0;
	font-family: ${styleVariables.mulish};
	font-size: ${({ isDesktop }) => (isDesktop ? '3rem' : '2rem')};
	color: ${({ theme }) => theme.colors.mainColor};
	background-color: transparent;
	border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
	cursor: text;

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: ${({ theme }) => theme.colors.mainColor};
	}

	&:focus::placeholder {
		color: ${styleVariables.LIGHT_BLUE};
	}

	/* Webkit */
	&::-webkit-search-cancel-button {
		-webkit-appearance: none;
		appearance: none;
	}

	/* Firefox */
	&::-moz-search-cancel-button {
		display: none;
	}

	/* Internet Explorer и Edge */
	&::-ms-clear {
		display: none;
	}
`;

export const StyledSearchBar = styled(StyledContainer)`
	img {
		cursor: pointer;
	}
`;
