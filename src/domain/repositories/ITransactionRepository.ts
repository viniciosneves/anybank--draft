import { IAnyBankTransaction } from "../entities/IAnyBankTransaction";
import { ITransactionType } from "../entities/ITransactionType";

export interface ITransactionRepository {
  add(transaction: Omit<IAnyBankTransaction, 'id'>): Promise<void>;
  listAll(): Promise<Array<IAnyBankTransaction & { transactionType: ITransactionType }>>;
}