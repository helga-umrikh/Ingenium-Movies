export type TSize = 'btn-lg' | 'btn-sm' | 'btn-plain';
export type TColor = 'primary' | 'secondary';

export type TStyledButton = {
	$color?: TColor;
	size?: TSize;
};

export type TButtonProps = TStyledButton & {
	title?: string;
	icon?: string;
	onClick?: () => void;
	active?: boolean;
	disabled?: boolean;
};
