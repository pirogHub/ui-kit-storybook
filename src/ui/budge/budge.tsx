import React from 'react';

import styled from '@emotion/styled';

import {getIconUrlByName} from '../../icons-data/icons-data';
import {Icon2} from '../icon/icon';

type Props = {
	leftIcon?: React.ReactNode | false;
	color: string;
	backgroundColor: string;
	label?: string;
	rightComponent?: React.ReactNode;
};

const Root = styled('div', {
	shouldForwardProp: (propName) => propName !== 'color' && propName !== 'backgroundColor',
})<{
	color: string;
	backgroundColor: string;
}>`
	border-radius: 6px;
	padding: 2px 10px;
	display: inline-flex;
	gap: 6px;
	height: 24px;
	justify-content: center;
	align-items: center;
	line-height: 20px;
	font-weight: 600;
	font-size: 13px;
	color: ${(p) => p.color};
	background-color: ${(p) => p.backgroundColor};

	& .SkyIcon {
		color: ${(p) => p.color};
		background-color: ${(p) => p.color};
	}
`;

const Text = styled('span')``;

export const Budge: React.FC<React.PropsWithChildren<Props>> = ({
	color,
	rightComponent,
	backgroundColor,
	label,
	leftIcon,
	children,
}) => {
	return (
		<div style={{display: 'inline'}}>
			<Root color={color} backgroundColor={backgroundColor}>
				{leftIcon ? (
					leftIcon
				) : leftIcon !== false ? (
					<Icon2 size={6} color={color} url={getIconUrlByName('pointerLi')} />
				) : null}
				<Text>{label || children}</Text>
				{rightComponent}
			</Root>
		</div>
	);
};
