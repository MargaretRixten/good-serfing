import { iconList } from './IconList.tsx';

interface IconProps {
	size: number;
	color: string;
	name: string;
	props?: any;
}

const iconNamesData = ['vacancy', 'calendar', 'organization'];

export const Icon = ({ size = 16, color = '#000000', name, ...props }: IconProps) => {
	if (!iconList[name]) return null;

	const { viewBox, data } = iconList[name];

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewBox || '0 0 512 512'}
			height={size}
			width={size}
			fill={iconNamesData.includes(name) ? 'none' : color}
			{...props}
		>
			{data}
		</svg>
	);
};
