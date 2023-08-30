import { ChangeEvent, useCallback } from 'react';
import Button from '../../../components/button/Button.tsx';
import './search.scss';
import { useAppDispatch } from '../../../store/hooks.ts';
import { setSearchAction } from '../../../store/actions/users.ts';
import { debounce } from 'lodash';
import Autocomplete from '../../../components/autocomplete/Autocomplete.tsx';
import { useSelector } from 'react-redux';
import { userOptionsSelector, userSelector } from '../../../store/selectors/usersSelectors.ts';

interface IProps {
	handleAddUser: () => void;
}

function Search({ handleAddUser }: IProps) {
	const dispatch = useAppDispatch();
	const usersOptions = useSelector(userOptionsSelector);
	const user = useSelector(userSelector);

	const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
		const newVal = e.target.value;
		dispatch(setSearchAction(newVal));
	};
	const debouncedHandler = useCallback(debounce(handleInputValue, 800), []);

	return (
		<div className="search">
			<Autocomplete options={usersOptions || null} onChange={debouncedHandler} />
			<Button onClick={handleAddUser} disabled={!user} className="add-btn" color="#fff" iconName="add">
				Добавить участника
			</Button>
		</div>
	);
}

export default Search;
