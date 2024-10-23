
import { ITransactionType } from "../entities/ITransactionType";
import { ITransactionTypeRepository } from "../repositories/ITransactionTypeRepository";

export class ListTransactionTypes {
  private transactionTypeRepository: ITransactionTypeRepository;

  constructor(transactionTypeRepository: ITransactionTypeRepository) {
    this.transactionTypeRepository = transactionTypeRepository;
  }

  async execute(): Promise<ITransactionType[]> {
    return this.transactionTypeRepository.listAll();
  }
}