import Dexie from "dexie";
import { IUser } from "../../domain/entities/IUser";
import { ITransactionType } from "../../domain/entities/ITransactionType";

class AnyBankDB extends Dexie {
  users!: Dexie.Table<IUser, string>;
  transactionTypes!: Dexie.Table<ITransactionType, string>;

  constructor() {
    super("AnyBankDB");
    this.version(1).stores({
      users: "email",
      transactionTypes: "id"
    });
  }
}

export const db = new AnyBankDB();