import React, { FC } from 'react';

import { StyledHeading } from './styled';
import { THeadingProps } from './types';

export const Heading: FC<THeadingProps> = ({ title, icon, $bordered, $justify }) => {
	return (
		<StyledHeading $bordered={$bordered} $justify={$justify}>
			<h2>{title}</h2>
			{icon && <img src={icon} />}
		</StyledHeading>
	);
};
