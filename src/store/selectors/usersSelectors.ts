import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';
import { getFullName } from '../../utils/helpers/getFullName.ts';

const state = ({ users }: RootState) => users;

export const usersSelector = createSelector(state, ({ users }) => users);
export const userOptionsSelector = createSelector(state, ({ users }) => {
	if (!users) return;
	return users.map((user) => {
		return {
			id: user.id,
			name: getFullName(user),
			email: user.email,
			city: user.address.city,
			image: user.image,
		};
	});
});
export const userSelector = createSelector(state, ({ user }) => user);
export const searchSelector = createSelector(state, ({ search }) => search);
export const selectedUsersSelector = createSelector(state, ({ selectedUsers }) => selectedUsers);
export const isLoadingUsersSelector = createSelector(state, ({ isLoading }) => isLoading);
export const isChangingUsersSelector = createSelector(state, ({ isChanging }) => isChanging);
