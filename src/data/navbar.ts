import { ERoutes } from '../enums/routes.enum.ts';

export interface ILinks {
	id: number;
	name: string;
	link: ERoutes;
}

export const links: ILinks[] = [
	{
		id: 1,
		name: 'Описание',
		link: ERoutes.Description,
	},
	{
		id: 2,
		name: 'Фотогалерея',
		link: ERoutes.Gallery,
	},
	{
		id: 3,
		name: 'Видеогалерея',
		link: ERoutes.VideoGallery,
	},
	{
		id: 4,
		name: 'Команда',
		link: ERoutes.Team,
	},
	{
		id: 5,
		name: 'Отзывы',
		link: ERoutes.Reviews,
	},
];
