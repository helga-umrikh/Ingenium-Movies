import { FC } from 'react';

import { StyledContainer } from '@components/Styleds/Container/styled';

import { DESKTOP_MIN } from '../../constants/variables';
import { StyledSpinner, TStyledSpinnerProps } from './styled';
import film_reel_mob from '@assets/film-reel-mob.png';
import film_reel_desk from '@assets/film-reel-desk.png';

type TSpinnerProps = TStyledSpinnerProps;

export const Spinner: FC<TSpinnerProps> = ({ maxwidth, maxheight }) => {
	return (
		<StyledContainer $display='fl' $flex='col' $width='100%' $height='100%'>
			<StyledSpinner
				$display='fl'
				$flex='col'
				$margin={['auto']}
				maxwidth={maxwidth}
				maxheight={maxheight}
			>
				<picture>
					<source srcSet={film_reel_mob} media={`(max-width: ${DESKTOP_MIN}px)`} />
					<img src={film_reel_desk} alt='spinner' width={'100%'} height={'100%'} />
				</picture>
			</StyledSpinner>
		</StyledContainer>
	);
};
