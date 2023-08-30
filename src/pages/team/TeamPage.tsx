import MainLayout from '../../layouts/mainLayout/MainLayout.tsx';
import Search from './search/Search.tsx';
import './teamPage.scss';
import { IUser } from '../../interfaces/users.ts';
import { useState } from 'react';
import { selectedUsersSelector, userSelector } from '../../store/selectors/usersSelectors.ts';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks.ts';
import Users from './users/Users.tsx';
import { setUserAction } from '../../store/actions/users.ts';

function TeamPage() {
	const dispatch = useAppDispatch();
	const selectedUsers = useSelector(selectedUsersSelector);
	const user = useSelector(userSelector);
	const [preSelectedUsers, setPreSelectedUsers] = useState<IUser[]>([]);
	console.log('preSelectedUsers', preSelectedUsers);
	const handleAddUser = () => {
		if (!user) return;
		if (preSelectedUsers.filter((selectedUser) => selectedUser.id === user.id).length) return;
		setPreSelectedUsers(preSelectedUsers.length ? [...preSelectedUsers, user] : [user]);
		dispatch(setUserAction(null));
	};

	return (
		<>
			<MainLayout>
				<div className="team-page">
					<h2>Команда организации</h2>
					<p>
						Владельцы команд могут добавлять участников в команду своей организации, добавляя их адреса
						электронной почты. У них должна быть учетная запись на сайте.
					</p>
					<Search handleAddUser={handleAddUser} />
					<Users selectedUsers={preSelectedUsers} />
				</div>
			</MainLayout>
		</>
	);
}

export default TeamPage;
