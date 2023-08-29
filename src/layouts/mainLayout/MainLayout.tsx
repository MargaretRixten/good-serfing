import Header from './header/Header.tsx';
import NavBar from './navBar/NavBar.tsx';
import './mainLayout.scss';

interface IProps {
	children: React.ReactNode;
}

function MainLayout({ children }: IProps) {
	return (
		<div className="main-layout">
			<Header />
			<div className="main-wrapper">
				<NavBar />
				<div className="main-content">{children}</div>
			</div>
		</div>
	);
}

export default MainLayout;
