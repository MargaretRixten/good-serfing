import { useState } from 'react';
import { Icon } from '../icon/Icon.tsx';
import { NavLink } from 'react-router-dom';
import './accordion.scss';

interface IProps {
	title: string;
	content: { id: number; name: string; link: string }[];
	iconName: string;
}

const Accordion = ({ title, content, iconName }: IProps) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="accordion-item">
			<div className={`${isActive ? 'active' : ''} accordion-title`} onClick={() => setIsActive(!isActive)}>
				<Icon size={40} color={isActive ? '#212121' : '#8494A1'} name={iconName} />
				<div className="accordion-name">{title}</div>
			</div>
			{isActive && (
				<ul className="accordion-content">
					{content.map((link) => (
						<li key={link.id}>
							<NavLink className="accordion-link" to={link.link}>
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
