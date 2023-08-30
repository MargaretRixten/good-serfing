import { Navigate, Route, Routes } from 'react-router-dom';
import TeamPage from '../../pages/team/TeamPage.tsx';
import DescriptionPage from '../../pages/description/DescriptionPage.tsx';
import GalleryPage from '../../pages/gallery/GalleryPage.tsx';
import VideoGalleryPage from '../../pages/videoGallery/VideoGalleryPage.tsx';
import ReviewsPage from '../../pages/reviews/ReviewsPage.tsx';
import { ERoutes } from '../../enums/routes.enum.ts';

function MainRoutes() {
	return (
		<Routes>
			<Route path={ERoutes.Main} element={<Navigate to={ERoutes.Team} />} />
			<Route path={ERoutes.Team} element={<TeamPage />} />
			<Route path={ERoutes.Description} element={<DescriptionPage />} />
			<Route path={ERoutes.Gallery} element={<GalleryPage />} />
			<Route path={ERoutes.VideoGallery} element={<VideoGalleryPage />} />
			<Route path={ERoutes.Reviews} element={<ReviewsPage />} />
		</Routes>
	);
}

export default MainRoutes;
