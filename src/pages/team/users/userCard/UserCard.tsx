import { Icon } from '../../../../components/icon/Icon.tsx';
import { IUser } from '../../../../interfaces/users.ts';
import { getFullName } from '../../../../utils/helpers/getFullName.ts';
import './userCard.scss';

interface IProps {
	user: IUser;
	onHandleRemove: (id: number) => void;
}

function UserCard({ user, onHandleRemove }: IProps) {
	return (
		<div className="user-card">
			<img className="user-card__img" src={user.image} alt="" />
			<div className="user-card__wrapper">
				<p className="user-card__name">{getFullName(user)}</p>
				<h3 className="user-card__title">{user.email}</h3>
				<p className="user-card__place">{user.address.city}</p>
				<div onClick={() => onHandleRemove(user.id)} className="user-card__close">
					<Icon size={14} color="#212121" name="close" />
				</div>
			</div>
		</div>
	);
}

export default UserCard;
