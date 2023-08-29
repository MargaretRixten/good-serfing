import './notifications.scss';
import favoriteLink from './../../assets/imgs/favorite.svg'
import messageLink from './../../assets/imgs/message.svg'

function Notifications() {
    return (
        <div className="notification">
            <img src={favoriteLink} alt=""/>
            <img src={messageLink} alt=""/>
        </div>
    );
}

export default Notifications;