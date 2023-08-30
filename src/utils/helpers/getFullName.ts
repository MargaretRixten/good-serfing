interface IGetFullNameParams {
	firstName: string;
	lastName: string;
	maidenName?: string;
}

export const getFullName = ({ firstName, lastName, maidenName }: IGetFullNameParams): string => {
	return [firstName, lastName, maidenName].join(' ');
};
