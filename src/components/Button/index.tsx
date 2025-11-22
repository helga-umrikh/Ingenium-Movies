import React, { FC } from 'react';



import { StyledButton } from './styled';
import { TButtonProps } from './types';


export const Button: FC<TButtonProps> = ({ $color, size, title, icon, onClick, active, disabled }) => {
	return (
		<StyledButton $color={$color} onClick={onClick} size={size} isActive={active} disabled={disabled}>
			{icon && <img src={icon} />}
			{title}
		</StyledButton>
	);
};