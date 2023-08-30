import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { Icon } from '../icon/Icon.tsx';
import { ILinks } from '../../data/navbar.ts';
import './accordion.scss';

interface IProps {
	title: string;
	content: ILinks[];
	iconName: string;
}

const Accordion = ({ title, content, iconName }: IProps) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="accordion-item">
			<div className={cn('accordion-title', { 'is-active': isActive })} onClick={() => setIsActive(!isActive)}>
				<Icon size={40} color={isActive ? '#212121' : '#8494A1'} name={iconName} />
				<div className="accordion-name">{title}</div>
			</div>
			{isActive && (
				<ul className="accordion-content">
					{content.map((link) => (
						<li key={link.id}>
							<NavLink
								className={({ isActive }) => `accordion-link  ${isActive ? 'is-active' : ''}`}
								to={link.link}
							>
								{link.name}
							</NavLink>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Accordion;
