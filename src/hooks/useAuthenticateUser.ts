import { useSetRecoilState } from "recoil";
import { userAtom } from "../recoil/atoms/userAtom";
import { AuthenticateUser } from "../domain/useCases/AuthenticateUser";
import { UserDexieRepository } from "../infrastructure/dexie/UserDexieRepository";

export const useAuthenticateUser = () => {
  const setUser = useSetRecoilState(userAtom);
  const userRepository = new UserDexieRepository(); 
  const authenticateUserUseCase = new AuthenticateUser(userRepository);

  const authenticate = async (email: string, password: string): Promise<void> => {
      const authenticatedUser = await authenticateUserUseCase.execute(email, password);
      setUser(authenticatedUser);
  };

  return { authenticate };
};