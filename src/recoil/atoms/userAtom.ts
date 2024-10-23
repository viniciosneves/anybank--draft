import { atom } from "recoil";
import { IUser } from "../../domain/entities/IUser";

export const userAtom = atom<Omit<IUser, 'password'> | null>({
    key: 'userAtom',
    default: null,
});