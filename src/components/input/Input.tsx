import './input.scss';
import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ value, onChange }: IInputProps) {
	return (
		<div className="input-wrap">
			<div className="input-title">Введите e-mail участника</div>
			<input value={value} onChange={onChange} className="input-field" type="text" />
		</div>
	);
}

export default Input;
