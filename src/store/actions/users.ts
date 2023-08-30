import { Dispatch } from 'redux';
import {
	ISetSearchAction,
	ISetSelectedUsers,
	ISetUserAction,
	ISetUsersAction,
	IUser,
	IUserRes,
} from '../../interfaces/users.ts';
import { EUsersActions } from '../../enums/actions.enums.ts';
import instance from '../../api/instance.ts';
import { AxiosResponse } from 'axios';

export const setUsersAction = (payload: IUser[] | null): ISetUsersAction => ({
	type: EUsersActions.SetUsers,
	payload,
});

export const setUserAction = (payload: IUser | null): ISetUserAction => ({
	type: EUsersActions.SetUser,
	payload,
});

export const setSearchAction = (payload: string | null): ISetSearchAction => ({
	type: EUsersActions.SetSearch,
	payload,
});

export const setSelectedUsersAction = (payload: IUser[] | null): ISetSelectedUsers => ({
	type: EUsersActions.SetSelectedUsers,
	payload,
});

export const getUsersThunk = () => async (dispatch: Dispatch) => {
	try {
		const { data } = await instance.get(`/users`);
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

interface IGetSearchUsersParams {
	search: string;
}
export const getSearchUsersThunk =
	({ search }: IGetSearchUsersParams) =>
	async (dispatch: Dispatch) => {
		try {
			const query = search ? '?' + new URLSearchParams({ limit: '10', q: search }).toString() : '';

			const { data }: AxiosResponse<IUserRes> = await instance.get(`/users/search${query}`);

			const { users } = data;

			dispatch(setUsersAction(users));
		} catch (err) {
			console.log(err);
		}
	};
