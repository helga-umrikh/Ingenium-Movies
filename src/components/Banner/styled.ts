import styled from 'styled-components';

import * as styleVariables from '../../constants/variables';

export const StyledBanner = styled.div`
	position: absolute;
	padding: 0.3rem;
	right: 10px;
	bottom: 10px;
	border-radius: 8px;
	background-color: ${styleVariables.GREY_BLUE};
	opacity: 0.6;

	font-family: ${styleVariables.mulish};
	font-size: 11px;
	font-weight: 600;
`;
