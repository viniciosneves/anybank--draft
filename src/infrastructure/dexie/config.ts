import Dexie from "dexie";
import { IUser } from "../../domain/entities/IUser";
import { ITransactionType } from "../../domain/entities/ITransactionType";
import { IAnyBankTransaction } from "../../domain/entities/IAnyBankTransaction";

class AnyBankDB extends Dexie {
  users!: Dexie.Table<IUser, string>;
  transactionTypes!: Dexie.Table<ITransactionType, string>;
  transactions!: Dexie.Table<IAnyBankTransaction, string>; 

  constructor() {
    super("AnyBankDB");
    this.version(1).stores({
      users: "email",
      transactionTypes: "id",
      transactions: "++id, transactionTypeId, timestamp" 
    });
  }
}

export const db = new AnyBankDB();