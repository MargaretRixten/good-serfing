import './pmCard.scss';
import iconLink from './../../assets/imgs/user.jpg';
import Button from '../button/Button.tsx';
function PmCard() {
	return (
		<div className="pm-card">
			<img className="pm-card__img" src={iconLink} alt="" />
			<h4 className="pm-card__text pm-card__title">Кристина</h4>
			<p className="pm-card__text pm-card__descr">Ваш персональный помощник по работе с системой</p>
			<Button className={'empty'}>Написать</Button>
			<p className="pm-card__text pm-card__descr">E-mail support@goodsurfing.org</p>
		</div>
	);
}

export default PmCard;
