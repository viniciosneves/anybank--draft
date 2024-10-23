import { ITransactionTypeRepository } from "../../domain/repositories/ITransactionTypeRepository";
import { ITransactionType } from "../../domain/entities/ITransactionType";
import { db } from "./config";

const defaultTransactionTypes = [
    { id: "1", display: "Saque" },
    { id: "2", display: "Depósito" },
    { id: "3", display: "Transferência" }
]

export class TransactionTypeDexieRepository implements ITransactionTypeRepository {
    async listAll(): Promise<ITransactionType[]> {
        try {
            const list = await db.transactionTypes.toArray() 
            if (list.length === 0) {
                db.transactionTypes.bulkAdd(defaultTransactionTypes)
                console.log('populado')
                return defaultTransactionTypes
            }
            return list
        } catch (error) {
            console.error("Erro ao listar tipos de transação", error);
            return []
        }
    }
}