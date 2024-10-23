import Dexie from "dexie";
import { IUser } from "../../domain/entities/IUser";

class AnyBankDB extends Dexie {
  users!: Dexie.Table<IUser, string>;

  constructor() {
    super("AnyBankDB");
    this.version(1).stores({
      users: "email",
    });
  }
}

export const db = new AnyBankDB();