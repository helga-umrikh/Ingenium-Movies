import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@components/Button';
import { StyledContainer } from '@components/Styleds/Container/styled';

import { isDesktop } from '../../redux/slices/moviesSlice';
import { useAppSelector } from '../../redux/store';
import { StyledHeaderContainer, StyledHeaderWrapper, StyledLogo, StyledSlogan } from './styled';

export const Header: FC = () => {
	const [isFavoritePage, setIsFavoritePage] = useState<boolean>(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/favorites') {
			setIsFavoritePage(true);
		} else {
			setIsFavoritePage(false);
		}
	}, [location]);

	return (
		<StyledHeaderContainer>
			<StyledHeaderWrapper
				$display='fl'
				$height='5rem'
				$margin={['0', 'auto']}
				$padding={['0', '2rem']}
				$flex='rw'
				$align='center'
				$justify='betw'
			>
				<div>
					<Link to={'/'}>
						<StyledLogo>INGENIUM</StyledLogo>
					</Link>
					<StyledSlogan>explore the world of cinema</StyledSlogan>
				</div>
				<StyledContainer $display='block'>
					<Button
						$color='primary'
						size={`btn-${useAppSelector(isDesktop) ? 'lg' : 'sm'}`}
						title={isFavoritePage ? 'Главная' : 'Избранное'}
						onClick={() => {
							navigate(isFavoritePage ? '/' : 'favorites');
						}}
					/>
				</StyledContainer>
			</StyledHeaderWrapper>
		</StyledHeaderContainer>
	);
};
