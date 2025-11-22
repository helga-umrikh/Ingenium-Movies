import styled from 'styled-components';

import { StyledContainer } from '@components/Styleds/Container/styled';

import * as styleVariables from '../../constants/variables';

export const StyledHeaderContainer = styled.header`
	width: 100%;
	position: sticky;
	z-index: ${styleVariables.Z_INDEX_HEADER};
`;

export const StyledHeaderWrapper = styled(StyledContainer)`
	@media screen and (min-width: ${styleVariables.DESKTOP_MIN}px) {
		max-width: ${styleVariables.DESKTOP_MAX}px;
		height: 120px;
	}
`;

export const StyledLogo = styled.h1`
	font-family: ${styleVariables.monoton};
	font-weight: 400;
	font-style: normal;
	font-size: 1.3rem;
	@media screen and (min-width: ${styleVariables.DESKTOP_MIN}px) {
		font-size: 2rem;
	}
`;

export const StyledSlogan = styled.p`
	font-size: 0.5rem;
	margin: 0 0 0 0.5rem;
	@media screen and (min-width: ${styleVariables.DESKTOP_MIN}px) {
		font-size: 0.7rem;
	}
`;
