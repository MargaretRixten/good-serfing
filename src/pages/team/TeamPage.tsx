import MainLayout from '../../layouts/mainLayout/MainLayout.tsx';
import Search from './search/Search.tsx';
import Users from './users/Users.tsx';
import './teamPage.scss';

function TeamPage() {
	return (
		<MainLayout>
			<div className="team-page">
				<h2>Команда организации</h2>
				<p>
					Владельцы команд могут добавлять участников в команду своей организации, добавляя их адреса
					электронной почты. У них должна быть учетная запись на сайте.
				</p>
				<Search />
				<Users />
			</div>
		</MainLayout>
	);
}

export default TeamPage;
