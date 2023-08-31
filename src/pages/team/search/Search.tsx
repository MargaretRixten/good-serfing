import { ChangeEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { debounce } from 'lodash';
import Button from '../../../components/button/Button.tsx';
import { useAppDispatch } from '../../../store/hooks.ts';
import {
	SetIsChangingUsersAction,
	setSearchAction,
	setSelectedUsersAction,
	setUserAction,
	setUsersAction,
} from '../../../store/actions/users.ts';
import {
	isLoadingUsersSelector,
	selectedUsersSelector,
	userOptionsSelector,
	userSelector,
	usersSelector,
} from '../../../store/selectors/usersSelectors.ts';
import Autocomplete from '../../../components/autocomplete/Autocomplete.tsx';
import './search.scss';

function Search() {
	const dispatch = useAppDispatch();
	const users = useSelector(usersSelector);
	const user = useSelector(userSelector);
	const usersOptions = useSelector(userOptionsSelector);
	const selectedUsers = useSelector(selectedUsersSelector);
	const isLoading = useSelector(isLoadingUsersSelector);

	const [value, setValue] = useState<string>('');

	const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		const newVal = e.target.value;
		dispatch(setSearchAction(newVal));
	};
	const debouncedHandler = useCallback(debounce(handleInputValue, 800), []);

	const handleSelectedUserUser = (id: number) => {
		const user = users?.find((user) => user.id === id);
		setValue(user!.email);
		dispatch(setUserAction(user || null));
	};
	const handleAddUser = () => {
		if (!user) return;

		const selectedUser = selectedUsers?.filter((selectedUser) => selectedUser.id === user.id).length;

		if (selectedUser) return;

		dispatch(setSelectedUsersAction(selectedUsers?.length ? [...selectedUsers, user] : [user]));
		dispatch(setUserAction(null));
		setValue('');
		dispatch(setSearchAction(null));
		dispatch(setUsersAction(null));
		dispatch(SetIsChangingUsersAction(true));
	};

	return (
		<div className="search">
			<Autocomplete
				options={usersOptions || null}
				onChange={debouncedHandler}
				value={value || ''}
				handleSelectedItems={handleSelectedUserUser}
				selectedItems={selectedUsers}
				isLoading={isLoading}
			/>
			<Button onClick={handleAddUser} disabled={!user} className="add-btn" color="#fff" iconName="add">
				Добавить участника
			</Button>
		</div>
	);
}

export default Search;
