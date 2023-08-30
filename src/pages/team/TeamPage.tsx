import MainLayout from '../../layouts/mainLayout/MainLayout.tsx';
import Search from './search/Search.tsx';
import './teamPage.scss';
import { IUser } from '../../interfaces/users.ts';
import { useState } from 'react';
import { userSelector } from '../../store/selectors/usersSelectors.ts';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks.ts';
import Users from './users/Users.tsx';
import { setSelectedUsersAction, setUserAction } from '../../store/actions/users.ts';

function TeamPage() {
	const dispatch = useAppDispatch();
	const user = useSelector(userSelector);
	const [preSelectedUsers, setPreSelectedUsers] = useState<IUser[]>([]);
	console.log('preSelectedUsers', preSelectedUsers);
	const handleAddUser = () => {
		if (!user) return;
		dispatch(setUserAction(null));
		if (preSelectedUsers.filter((selectedUser) => selectedUser.id === user.id).length) return;
		setPreSelectedUsers(preSelectedUsers.length ? [...preSelectedUsers, user] : [user]);
	};

	const onHandleSave = () => {
		dispatch(setSelectedUsersAction(preSelectedUsers));
	};

	const onHandleRemove = (id: number) => {
		const newPreselectedUsers = preSelectedUsers.filter((user) => user.id !== id);
		setPreSelectedUsers(newPreselectedUsers);
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
					<Search preSelectedUsers={preSelectedUsers} handleAddUser={handleAddUser} />
					<Users
						onHandleRemove={onHandleRemove}
						onHandleSave={onHandleSave}
						selectedUsers={preSelectedUsers}
					/>
				</div>
			</MainLayout>
		</>
	);
}

export default TeamPage;
