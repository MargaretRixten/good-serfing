import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import useOutsideClick from '../../hooks/useOutsideClick.ts';
import { IUser, IUserOption } from '../../interfaces/users.ts';
import './autocomplete.scss';

interface IAutocompleteProps extends InputHTMLAttributes<HTMLInputElement> {
	options: IUserOption[] | null;
	value: string;
	handleSelectedItems: (id: number) => void;
	selectedItems: IUser[] | null;
	isLoading: boolean;
}

function Autocomplete({ options, onChange, value, handleSelectedItems, selectedItems, isLoading }: IAutocompleteProps) {
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
					{(() => {
						switch (true) {
							case isLoading:
								return <div className="autocomplete-loading">Загрузка...</div>;
							case !!options && !options?.length:
								return <div className="autocomplete-loading">Не найдено</div>;
							case !!options:
								return (
									<>
										{options?.map((option, index) => {
											const isActive = !!selectedItems?.find((user) => user.id === option.id);
											return (
												<li
													onClick={() => handleSelectedItems(option.id)}
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
									</>
								);
							default:
								return null;
						}
					})()}
				</ul>
			)}
		</div>
	);
}

export default Autocomplete;
