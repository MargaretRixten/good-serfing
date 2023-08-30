import PmCard from '../../../components/pmCard/PmCard.tsx';
import Accordion from '../../../components/accordion/Accordion.tsx';
import { links } from '../../../data/navbar.ts';
import './navBar.scss';

function NavBar() {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li className="navbar__item">
					<Accordion title="Рабочий стол" content={links} iconName="desktop" />
				</li>
				<li className="navbar__item">
					<Accordion title="Вакансии" content={links} iconName="vacancy" />
				</li>
				<li className="navbar__item">
					<Accordion title="Заявки" content={links} iconName="issues" />
				</li>
				<li className="navbar__item">
					<Accordion title="Календарь" content={links} iconName="calendar" />
				</li>
				<li className="navbar__item">
					<Accordion title="Организация" content={links} iconName="organization" />
				</li>
			</ul>
			<PmCard />
		</nav>
	);
}

export default NavBar;
