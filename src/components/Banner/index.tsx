import React, { FC } from 'react';

import { StyledBanner } from './styled';

type TBannerProps = {
	title: string;
};

export const Banner: FC<TBannerProps> = ({ title }) => {
	return <StyledBanner>{title}</StyledBanner>;
};
