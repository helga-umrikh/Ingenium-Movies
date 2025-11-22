import { TFlexJustify } from '@components/Styleds/Container/types';

export type TStyledHeading = {
	$bordered?: boolean;
	$justify?: TFlexJustify;
};

export type THeadingProps = TStyledHeading & {
	title: string;
	icon?: string;
};
