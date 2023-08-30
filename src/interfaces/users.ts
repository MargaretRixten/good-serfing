import { EUsersActions } from '../enums/actions.enums.ts';
import { IPagination } from './index.tsx';

export interface IUserRes extends IPagination {
	users: IUser[];
}

export interface IUsersState {
	users: IUser[] | null;
	user: IUser | null;
	search: string | null;
	selectedUsers: IUser[] | null;
}

export interface IHair {
	color: string;
	type: string;
}

export interface ICoordinates {
	lat: number;
	lng: number;
}

export interface IAddress {
	address: string;
	city: string;
	coordinates: ICoordinates;
	postalCode: string;
	state: string;
}

export interface IBank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}

export interface ICompany {
	address: IAddress;
	department: string;
	name: string;
	title: string;
}

export interface IUser {
	address: IAddress;
	age: number;
	bank: IBank;
	birthDate: string;
	bloodGroup: string;
	company: ICompany;
	domain: string;
	ein: string;
	email: string;
	eyeColor: string;
	firstName: string;
	gender: string;
	hair: IHair;
	height: number;
	id: number;
	image: string;
	ip: string;
	lastName: string;
	macAddress: string;
	maidenName: string;
	password: string;
	phone: string;
	ssn: string;
	university: string;
	userAgent: string;
	username: string;
	weight: number;
}

export interface ISetUsersAction {
	type: EUsersActions.SetUsers;
	payload: IUser[] | null;
}
export interface ISetUserAction {
	type: EUsersActions.SetUser;
	payload: IUser | null;
}
export interface ISetSearchAction {
	type: EUsersActions.SetSearch;
	payload: string | null;
}

export interface ISetSelectedUsers {
	type: EUsersActions.SetSelectedUsers;
	payload: IUser[] | null;
}

export type TUsersActions = ISetUsersAction | ISetUserAction | ISetSearchAction | ISetSelectedUsers;
