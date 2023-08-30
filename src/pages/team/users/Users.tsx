import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/hooks.ts';
import { searchSelector } from '../../../store/selectors/usersSelectors.ts';
import { getSearchUsersThunk, getUsersThunk } from '../../../store/actions/users.ts';
import UserCard from './userCard/UserCard.tsx';
import { IUser } from '../../../interfaces/users.ts';
import Button from '../../../components/button/Button.tsx';

import './users.scss';

interface IProps {
	selectedUsers: IUser[];
}

function Users({ selectedUsers }: IProps) {
	const dispatch = useAppDispatch();
	const search = useSelector(searchSelector);
	useEffect(() => {
		async function handle() {
			try {
				await dispatch(getUsersThunk());
			} catch (err) {
				console.log(err);
			}
		}
		handle();
	}, []);

	useEffect(() => {
		async function getUsersSearch() {
			try {
				if (search === null) return;
				await dispatch(getSearchUsersThunk({ search }));
			} catch (err) {
				console.log(err);
			}
		}
		getUsersSearch();
	}, [search]);
	return (
		<div className="users-wrapper">
			<div className="users-list">
				{selectedUsers.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
			{!!selectedUsers.length && <Button className="save-btn">Сохранить</Button>}
		</div>
	);
}

export default Users;
