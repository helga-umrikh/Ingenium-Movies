import styled from 'styled-components';

import { FlexJustifyMap } from '@components/Styleds/Container/types';

import * as styleVariables from '../../constants/variables';
import { TStyledHeading } from './types';

export const StyledHeading = styled.div<TStyledHeading>`
	width: 100%;
	margin: 0 0 3rem 0;
	padding: 0 0 0.5rem 0;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	${({ $justify }: TStyledHeading) => $justify && `justify-content:${FlexJustifyMap[$justify]};`}
	${({ $bordered }: TStyledHeading) =>
		$bordered && `border-bottom: 2px solid ${styleVariables.WHITE};`}

	h2 {
		margin: 0 1rem 0 0;
		font-family: ${styleVariables.mulish};
		font-size: 1.5rem;
	}

	img {
		margin: 0;
		height: 40px;
		width: 40px;
	}

	@media screen and (min-width: ${styleVariables.DESKTOP_MIN}px) {
		h2 {
			font-size: 2.5rem;
		}

		img {
			height: 40px;
			width: 40px;
		}
	}
`;
