import { atom } from "recoil";
import { IUser } from "../../domain/entities/IUser";

export const userAtom = atom<IUser | null>({
    key: 'userAtom',
    default: null,
});