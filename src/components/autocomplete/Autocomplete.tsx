import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import './autocomplete.scss';
import { useAppDispatch } from '../../store/hooks.ts';
import { setUserAction } from '../../store/actions/users.ts';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/usersSelectors.ts';
import useOutsideClick from '../../hooks/useOutsideClick.ts';

interface IAutocompleteProps extends InputHTMLAttributes<HTMLInputElement> {
	options: { id: number; name: string; email: string; city: string; image: string }[] | null;
	value: string;
}

function Autocomplete({ options, onChange, value }: IAutocompleteProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();
	const users = useSelector(usersSelector);

	useEffect(() => {
		if (!inputRef.current) return;
		inputRef.current.value = value;
	}, [value]);

	const handleAddUser = (id: number) => {
		const user = users?.find((user) => user.id === id);
		dispatch(setUserAction(user || null));
		if (!inputRef.current) return;
		inputRef.current.value = user!.email;
	};
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleFocus = () => {
		setIsOpen(true);
	};

	const handleOutsideClick = () => setIsOpen(false);
	const outsideClickRef = useOutsideClick(handleOutsideClick);

	return (
		<div ref={outsideClickRef} className="autocomplete-wrap">
			<div className="autocomplete-title">Введите e-mail участника</div>
			<input
				ref={inputRef}
				className="autocomplete-field"
				type="text"
				onChange={onChange}
				placeholder="Введите текст..."
				onFocus={handleFocus}
			/>
			{isOpen && (
				<ul className="autocomplete-list">
					{options?.map((option, index) => (
						<li onClick={() => handleAddUser(option.id)} className="autocomplete-item" key={index}>
							<img className="autocomplete-img" src={option.image} alt="" />
							<div className="autocomplete-descr">
								<span>{option.name}</span>
								<span>{option.email}</span>
								<span>{option.city}</span>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Autocomplete;
