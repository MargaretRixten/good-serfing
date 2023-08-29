import './userCard.scss';
import userCard from './../../assets/imgs/user.jpg'
function UserCard() {
    return (
        <div className='user-card'>
            <img className='user-card__img' src={userCard} alt=""/>
            <h3 className='user-card__title'>Организатор</h3>
            <p className='user-card__name'>Владислав Краснопольский</p>
            <p className='user-card__place'>Владивосток, Россия</p>
        </div>
    );
}

export default UserCard;