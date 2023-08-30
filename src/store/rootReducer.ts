import { combineReducers } from 'redux';
import { usersReducer } from './reducers/users.ts';

const rootReducer = combineReducers({
	users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
