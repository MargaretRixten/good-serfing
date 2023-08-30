import { EUsersActions } from '../../enums/actions.enums.ts';
import { IUsersState, TUsersActions } from '../../interfaces/users.ts';

const initState: IUsersState = {
	users: null,
	user: null,
	search: null,
	selectedUsers: null,
	isLoading: false,
	isChanging: false,
};

const initialState = { ...initState };

export const usersReducer = (state = initialState, action: TUsersActions): IUsersState => {
	switch (action.type) {
		case EUsersActions.SetUsers:
			return { ...state, users: action.payload };
		case EUsersActions.SetUser:
			return { ...state, user: action.payload };
		case EUsersActions.SetSearch:
			return { ...state, search: action.payload };
		case EUsersActions.SetSelectedUsers:
			return { ...state, selectedUsers: action.payload };
		case EUsersActions.SetIsLoading:
			return { ...state, isLoading: action.payload };
		case EUsersActions.SetIsChanging:
			return { ...state, isChanging: action.payload };
		default:
			return { ...state };
	}
};
