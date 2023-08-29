import './header.scss';
import logo from '../../../assets/imgs/logo.png'
import Language from "../../../components/language/Language.tsx";
import UserLog from "../../../components/userLog/UserLog.tsx";
import Notifications from "../../../components/notifications/Notifications.tsx";

function Header() {
    return (
        <header>
            <div className='logo__wrapper'>
                <img src={logo} alt=""/>
                <Language/>
            </div>
            <div className='user__wrapper'>
                <Notifications/>
                <UserLog/>
            </div>
        </header>
    );
}

export default Header;