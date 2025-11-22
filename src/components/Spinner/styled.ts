import styled, { keyframes } from 'styled-components';

import { StyledContainer } from '@components/Styleds/Container/styled';

export type TStyledSpinnerProps = {
	maxwidth: string;
	maxheight: string;
};

const spin = keyframes`
from { 
  transform: rotate(0deg); 
  }
  
  to { 
    transform: rotate(360deg); 
    }
`;

export const StyledSpinner = styled(StyledContainer)<TStyledSpinnerProps>`
	max-width: ${({ maxwidth }: TStyledSpinnerProps) => maxwidth};
	max-height: ${({ maxheight }: TStyledSpinnerProps) => maxheight};
	animation: ${spin} 2s linear infinite;
`;
