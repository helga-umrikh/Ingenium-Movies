export type TStyledContainerProps = {
	$position?: TPositionLabels;
	$top?: string;
	$right?: string;
	$bottom?: string;
	$left?: string;
	$zIndex?: number;
	$width?: string;
	$height?: string;
	$margin?: string[];
	$padding?: string[];
	$display: TDisplayLabels;
	$flex?: TFlexDirectionLabels;
	$align?: TFlexAlign;
	$justify?: TFlexJustify;
	$wrap?: TWrap;
	$breakpoint?: TBreakpointsLabels;
	$gap?: string;
	$grid?: TGridTemplate;
	$justifyItems?: TJustifyItems;
};

export type TPositionLabels = 'static' | 'rel' | 'abs' | 'fix' | 'sticky';

export const PositionMap: Record<TPositionLabels, string> = {
	static: 'static',
	rel: 'relative',
	abs: 'absolute',
	fix: 'fixed',
	sticky: 'sticky',
};

export type TBreakpointsLabels = 'desk' | 'mob';

export type TDisplayLabels = 'block' | 'fl' | 'inl' | 'inl-b' | 'grid' | 'none';

export const DisplayMap: Record<TDisplayLabels, string> = {
	block: 'block',
	fl: 'flex',
	inl: 'inline',
	'inl-b': 'inline-block',
	grid: 'grid',
	none: 'none',
};

//FLEXBOX

export type TFlexDirectionLabels = 'col' | 'rw' | 'col-rv' | 'rw-rv';

export const FlexDirectionMap: Record<TFlexDirectionLabels, string> = {
	col: 'column',
	'col-rv': 'coumn-reverse',
	rw: 'row',
	'rw-rv': 'row-reverse',
};

export type TFlexJustify = 'fl-st' | 'fl-end' | 'center' | 'betw' | 'around' | 'evenly';

export const FlexJustifyMap: Record<TFlexJustify, string> = {
	'fl-st': 'flex-start',
	'fl-end': 'flex-end',
	center: 'center',
	betw: 'space-between',
	around: 'space-around',
	evenly: 'space-evenly',
};

export type TFlexAlign = 'fl-st' | 'fl-end' | 'center' | 'stretch' | 'base';

export const FlexAlignMap: Record<TFlexAlign, string> = {
	'fl-st': 'flex-start',
	'fl-end': 'flex-end',
	center: 'center',
	stretch: 'stretch',
	base: 'baseline',
};

export type TWrap = 'wr' | 'no-wr' | 'wr-rv';

export const FlexWrapMap: Record<TWrap, string> = {
	wr: 'wrap',
	'no-wr': 'no-wrap',
	'wr-rv': 'wrap-reverse',
};

// GRID;

export type TGridTemplateType = 'col' | 'rw' | 'a';

export const GridTemplateTypeMap: Record<TGridTemplateType, string> = {
	col: 'columns',
	rw: 'rows',
	a: 'areas',
};

export type TGridTemplate = [TGridTemplateType, string];

export type TJustifyItems = 'stretch' | 'center' | 'start' | 'end';
