import React, { FC, useState } from 'react';

import { StyledContainer } from '@components/Styleds/Container/styled';

import { Z_INDEX_SELECT } from '../../constants/variables';
import { StyledSelect, StyledSelectWraper, TMode, TSize } from './styled';

type TSelectProps = {
	styleType: TMode;
	options: string[];
	size?: TSize;
	handleSelect: (value: string) => void;
	disabled?: boolean;
};

export const Select: FC<TSelectProps> = ({ styleType, options, size, handleSelect, disabled }) => {
	const [value, setValue] = useState<string>('');
	const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

	return (
		<StyledSelectWraper
			$display='block'
			$width='200px'
			$position='rel'
			$disabled={disabled ?? false}
		>
			<StyledSelect
				$mode={styleType}
				$size={size ?? 'sel-md'}
				onBlur={() => setIsOptionsOpen(false)}
				onChange={(event) => {
					handleSelect(event.target.value);
					setValue(event.target.value);
				}}
				onClick={() => setIsOptionsOpen(!isOptionsOpen)}
				value={value}
				disabled={disabled ?? false}
				$disabled={disabled ?? false}
			>
				{options.map((option) => (
					<option value={option} key={option}>
						{option}
					</option>
				))}
			</StyledSelect>
			<StyledContainer
				$display='block'
				$position='abs'
				$right={'10px'}
				$bottom={'10px'}
				$width='20px'
				$height='20px'
				$zIndex={Z_INDEX_SELECT}
			>
				<svg
					width='100%'
					height='100%'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					{isOptionsOpen ? (
						<path
							d='M5.16108 14.9083C4.45387 15.7165 5.02785 16.9814 6.1018 16.9814H17.898C18.972 16.9814 19.5459 15.7165 18.8388 14.9083L13.3169 8.59762C12.6197 7.80079 11.3801 7.80079 10.6829 8.59762L5.16108 14.9083ZM6.65274 15.4814L11.8118 9.58537C11.9114 9.47154 12.0885 9.47154 12.1881 9.58537L17.3471 15.4814H6.65274Z'
							fill='inherit'
						/>
					) : (
						<path
							d='M5.16108 10.0731C4.45387 9.2649 5.02785 8 6.1018 8H17.898C18.972 8 19.5459 9.2649 18.8388 10.0731L13.3169 16.3838C12.6197 17.1806 11.3801 17.1806 10.6829 16.3838L5.16108 10.0731ZM6.65274 9.5L11.8118 15.396C11.9114 15.5099 12.0885 15.5099 12.1881 15.396L17.3471 9.5H6.65274Z'
							fill='inherit'
						/>
					)}
				</svg>
			</StyledContainer>
		</StyledSelectWraper>
	);
};
