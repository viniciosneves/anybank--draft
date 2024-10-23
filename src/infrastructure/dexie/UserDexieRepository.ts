import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { IUser } from "../../domain/entities/IUser";
import { nanoid } from "nanoid";
import { db } from "./config";

export class UserDexieRepository implements IUserRepository {

  async createUser(user: Omit<IUser, 'id'>): Promise<void> {
    try {
      await db.users.add({
        ...user,
        id: nanoid(10)
      });
    } catch (error) {
      console.error("Erro ao criar o usuário no Dexie:", error);
      throw new Error("Falha ao criar o usuário");
    }
  }
  async findByEmail(email: string): Promise<IUser | null> {
    try {
      const user = await db.users.where('email').equals(email).first();
      return user ?? null;
    } catch (error) {
      console.error("Erro ao buscar usuário por email no Dexie:", error);
      throw new Error("Falha ao buscar o usuário");
    }
  }
}