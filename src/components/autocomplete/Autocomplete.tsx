import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import useOutsideClick from '../../hooks/useOutsideClick.ts';
import { IUser } from '../../interfaces/users.ts';
import './autocomplete.scss';

interface IAutocompleteProps extends InputHTMLAttributes<HTMLInputElement> {
	options: { id: number; name: string; email: string; city: string; image: string }[] | null;
	value: string;
	handleSelectedUserUser: (id: number) => void;
	selectedUsers: IUser[] | null;
}

function Autocomplete({ options, onChange, value, handleSelectedUserUser, selectedUsers }: IAutocompleteProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		if (!inputRef.current) return;
		inputRef.current.value = value;
	}, [value]);

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
				onFocus={handleFocus}
			/>
			{isOpen && (
				<ul className="autocomplete-list">
					{options?.map((option, index) => {
						const isActive = !!selectedUsers?.find((user) => user.id === option.id);
						return (
							<li
								onClick={() => handleSelectedUserUser(option.id)}
								className={cn('autocomplete-item', { 'is-active': isActive })}
								key={index}
							>
								<img className="autocomplete-img" src={option.image} alt="" />
								<div className="autocomplete-descr">
									<span>{option.name}</span>
									<span>{option.email}</span>
									<span>{option.city}</span>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default Autocomplete;
