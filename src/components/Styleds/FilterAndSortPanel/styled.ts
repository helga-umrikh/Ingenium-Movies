import styled from 'styled-components';

import * as styleVariables from '../../../constants/variables';
import { StyledContainer } from '../Container/styled';

export const StyledFilterAndSortPanel = styled(StyledContainer)`
	@media screen and (min-width: ${styleVariables.DESKTOP_MIN}px) {
		justify-content: space-between;
	}
`;
