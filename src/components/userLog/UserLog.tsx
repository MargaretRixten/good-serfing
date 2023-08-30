import userImg from './../../assets/imgs/user.jpg';
import './userLog.scss';

function UserLog() {
	return (
		<div className="user-log">
			<span>Владислав</span>
			<img src={userImg} alt="" />
			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
				<path
					d="M9 3L5 7L1 3.03551"
					stroke="#0E1D27"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
}

export default UserLog;
