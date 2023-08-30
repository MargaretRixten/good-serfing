import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/hooks.ts';
import {
	isChangingUsersSelector,
	searchSelector,
	selectedUsersSelector,
} from '../../../store/selectors/usersSelectors.ts';
import { getSearchUsersThunk, SetIsChangingUsersAction, setSelectedUsersAction } from '../../../store/actions/users.ts';
import UserCard from './userCard/UserCard.tsx';
import Button from '../../../components/button/Button.tsx';
import './users.scss';

function Users() {
	const dispatch = useAppDispatch();
	const search = useSelector(searchSelector);
	const selectedUsers = useSelector(selectedUsersSelector);
	const isChanging = useSelector(isChangingUsersSelector);

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

	const onHandleSave = () => {
		dispatch(SetIsChangingUsersAction(false));
	};

	const onHandleRemove = (id: number) => {
		const newPreselectedUsers = selectedUsers?.filter((user) => user.id !== id);
		dispatch(setSelectedUsersAction(newPreselectedUsers || null));
		dispatch(SetIsChangingUsersAction(true));
	};

	return (
		<div className="users-wrapper">
			{selectedUsers && !!selectedUsers.length ? (
				<div className="users-list">
					{selectedUsers.map((user) => (
						<UserCard onHandleRemove={onHandleRemove} key={user.id} user={user} />
					))}
				</div>
			) : (
				<div style={{ marginBottom: '65px' }}>Нет добавленных участников</div>
			)}

			{isChanging && (
				<Button onClick={onHandleSave} className="save-btn">
					Сохранить
				</Button>
			)}
		</div>
	);
}

export default Users;
