import styled, { css } from 'styled-components';

import { PrimaryStyle, SecondaryStyle } from '../../constants/themeStyled';
import * as styleVariables from '../../constants/variables';
import { TStyledButton } from './types';

export const StyledButton = styled.button<TStyledButton & { isActive?: boolean }>`
	${({ size }: TStyledButton) => {
		switch (size) {
			case 'btn-lg':
				return css`
					padding: 1rem 2rem;
				`;
			case 'btn-sm':
				return css`
					padding: 0.5rem 0.6rem;
				`;
			case 'btn-plain':
				return css`
					padding: 0.3rem;
				`;
			default:
				return css`
					padding: 0.5rem 1rem;
				`;
		}
	}}

	${({ $color }: TStyledButton) => {
		switch ($color) {
			case 'primary':
				return PrimaryStyle;
			case 'secondary':
				return SecondaryStyle;
			default:
				return PrimaryStyle;
		}
	}}


	img {
		height: 30px;
		width: 30px;
	}

	font-family: ${styleVariables.mulish};
	font-size: 16px;
	transition: transform 0.1s ease-in-out;

	${({ isActive, disabled, $color }) =>
		isActive &&
		!disabled &&
		css`
			transform: scale(0.98);
			${$color === 'primary' ? SecondaryStyle : PrimaryStyle};
			border-color: ${styleVariables.LIGHT_BLUE};
			cursor: default;
		`}

	${({ disabled }) =>
		disabled &&
		`cursor: not-allowed;
			opacity: 0.5;
		`}

	${({ disabled, isActive, $color }) =>
		!disabled &&
		!isActive &&
		css`
			&:hover {
				${$color === 'primary' ? SecondaryStyle : PrimaryStyle};
				cursor: pointer;
			}
		`}

	@medisa screen and(${styleVariables.DESKTOP_MIN}px) {
		img {
			heigth: 40px;
			width: 40px;
		}
	}
`;
