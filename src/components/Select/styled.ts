import styled, { css } from 'styled-components';



import { StyledContainer } from '@components/Styleds/Container/styled';



import { PrimaryStyle, SecondaryStyle } from '../../constants/themeStyled';
import * as styleVariables from '../../constants/variables';


export type TMode = 'primary' | 'secondary';
export type TSize = 'sel-sm' | 'sel-lg' | 'sel-md';

type TStyledSelectProps = TStyledSelectWrapperProps & {
	$mode?: TMode;
	$size: TSize;
};

type TStyledSelectWrapperProps = {
	$disabled: boolean;
};

export const StyledSelectWraper = styled(StyledContainer).attrs<TStyledSelectWrapperProps>(
	({ $disabled }: TStyledSelectWrapperProps) => ({
		$disabled: $disabled,
	})
)<TStyledSelectWrapperProps>`
	${({ $disabled }: TStyledSelectWrapperProps) =>
		!$disabled &&
		`
		cursor: pointer;
		
		&:hover svg {
			fill: ${styleVariables.DEEP_BLUE};
		}
		
		&:hover select {
			background-color: ${styleVariables.COLD_WHITE};
			color: ${styleVariables.DEEP_BLUE};
		}	
	`}

	svg {
		width: inherit;
		height: inherit;
		fill: ${styleVariables.COLD_WHITE};
	}
`;

const StyledBaseStyleSelect = css`
	width: inherit;
	padding: 0.5rem;
	position: relative;
	font-size: 1rem;
	font-family: ${styleVariables.mulish};
	-moz-appearance: none;
	-webkit-appearance: none;

	::-ms-expand {
		display: none;
	}
	z-index: ${styleVariables.Z_INDEX_SELECT_ICON};
	cursor: pointer;
`;

export const StyledSelect = styled.select.attrs<TStyledSelectProps>(({ $mode, $size }) => ({
	$mode: $mode,
	$size: $size,
}))<TStyledSelectProps>`
	${StyledBaseStyleSelect}

	${({ $size }: TStyledSelectProps) => {
		switch ($size) {
			case 'sel-lg':
				return css`
					padding: 1rem 2rem;
				`;
			case 'sel-sm':
				return css`
					padding: 0.5rem 1rem;
				`;
			default:
				return css`
					padding: 0.5rem 1rem;
				`;
		}
	}}

	${({ $mode }: TStyledSelectProps) => {
		switch ($mode) {
			case 'primary':
				return PrimaryStyle;
			case 'secondary':
				return SecondaryStyle;
			default:
				return PrimaryStyle;
		}
	}}

	${({ $disabled }: TStyledSelectProps) =>
		$disabled &&
		`cursor: not-allowed;
	`}
`;