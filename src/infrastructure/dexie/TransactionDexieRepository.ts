import { ITransactionRepository } from "../../domain/repositories/ITransactionRepository";
import { IAnyBankTransaction } from "../../domain/entities/IAnyBankTransaction";
import { ITransactionType } from "../../domain/entities/ITransactionType";
import { db } from "./config";
import { nanoid } from "nanoid";

export class TransactionDexieRepository implements ITransactionRepository {
  
  async add(transaction: Omit<IAnyBankTransaction, 'id'>): Promise<void> {
    try {
      await db.transactions.add({
          ...transaction,
        id: nanoid(10),
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Erro ao adicionar transação", error);
      throw new Error("Falha ao adicionar a transação");
    }
  }

  async listAll(): Promise<Array<IAnyBankTransaction & { transactionType: ITransactionType }>> {
    try {
      const transactions = await db.transactions.toArray();

      const result = await Promise.all(
        transactions.map(async (transaction) => {
          const transactionType = await db.transactionTypes.get(transaction.transactionTypeId);
          return {
            ...transaction,
            transactionType: transactionType!,
          };
        })
      );

      return result;
    } catch (error) {
      console.error("Erro ao listar transações", error);
      throw new Error("Falha ao listar transações");
    }
  }
}