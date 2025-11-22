import styled, { css } from 'styled-components';

import * as styleVariables from '../../../constants/variables';
import {
	DisplayMap,
	FlexAlignMap,
	FlexDirectionMap,
	FlexJustifyMap,
	FlexWrapMap,
	GridTemplateTypeMap,
	PositionMap,
	TStyledContainerProps,
} from './types';

export const StyledContainer = styled.div<TStyledContainerProps>`
	//position

	${({ $position }: TStyledContainerProps) => $position && `position: ${PositionMap[$position]};`}

	${({ $top }: TStyledContainerProps) => $top && `top: ${$top};`}
	${({ $right }: TStyledContainerProps) => $right && `right: ${$right};`}
	${({ $bottom }: TStyledContainerProps) => $bottom && `bottom: ${$bottom};`}
	${({ $left }: TStyledContainerProps) => $left && `left: ${$left};`}


	${({ $zIndex }: TStyledContainerProps) => $zIndex && `z-index: ${$zIndex};`}

	//width & height

	${({ $width }: TStyledContainerProps) => $width && `width: ${$width};`}

	${({ $height }: TStyledContainerProps) => $height && `height: ${$height};`}

display: ${({ $display }: TStyledContainerProps) => DisplayMap[$display]};

	${({ $breakpoint }: TStyledContainerProps) => {
		switch ($breakpoint) {
			case 'desk':
				return StyledDesktopContainer;
			case 'mob':
				return StyledMobileContainer;
		}
	}}

	//margin & padding

${({ $margin }: TStyledContainerProps) =>
		$margin && Array.isArray($margin) && `margin: ${$margin.map((value) => `${value}`).join(' ')}`};

	${({ $padding }: TStyledContainerProps) =>
		$padding &&
		Array.isArray($padding) &&
		`padding: ${$padding.map((value) => `${value}`).join(' ')}`};

	//flexbox

	${({ $display, $flex }: TStyledContainerProps) =>
		$display === 'fl' && $flex && `flex-direction: ${FlexDirectionMap[$flex]};`}

	${({ $display, $align }: TStyledContainerProps) =>
		$display === 'fl' && $align && `align-items: ${FlexAlignMap[$align]};`}

  ${({ $display, $justify }: TStyledContainerProps) =>
		$display === 'fl' && $justify && `justify-content: ${FlexJustifyMap[$justify]};`}

  ${({ $display, $wrap }: TStyledContainerProps) =>
		$display === 'fl' && $wrap && `flex-wrap: ${FlexWrapMap[$wrap]};`} 


	
	//grid

	${({ $display, $grid }) =>
		$display === 'grid' && $grid && `grid-template-${GridTemplateTypeMap[$grid[0]]}: ${$grid[1]};`}

	${({ $display, $gap }) => ($display === 'fl' || $display === 'grid') && $gap && `gap: ${$gap};`}

	${({ $justifyItems }) => $justifyItems && `justify-items: ${$justifyItems};`}
`;

export const StyledDesktopContainer = css<TStyledContainerProps>`
	@media screen and (min-width: ${styleVariables.DESKTOP_MIN}px) {
		display: ${({ $display }) => DisplayMap[$display]};
	}
	@media screen and (max-width: ${styleVariables.DESKTOP_MIN - 1}px) {
		display: none;
	}
`;

export const StyledMobileContainer = css<TStyledContainerProps>`
	@media screen and (min-width: ${styleVariables.DESKTOP_MIN}px) {
		display: none;
	}
	@media screen and (max-width: ${styleVariables.DESKTOP_MIN - 1}px) {
		display: ${({ $display }) => DisplayMap[$display]};
	}
`;
