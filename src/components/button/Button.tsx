import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Icon } from '../icon/Icon.tsx';
import './button.scss';

interface CustomButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
	iconName?: string;
	color?: string;
}

function Button({ children, className = '', onClick, iconName, color = '#000', disabled }: CustomButtonProps) {
	return (
		<button onClick={onClick} disabled={disabled} className={className}>
			{iconName && <Icon size={14} color={color} name={iconName} />}
			{children}
		</button>
	);
}

export default Button;
