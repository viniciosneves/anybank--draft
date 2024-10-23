import { FormRegister } from "./components/FormRegister"
import { CreateUser } from "./domain/useCases/CreateUser";
import { UserDexieRepository } from "./infrastructure/dexie/UserDexieRepository";

const Register = () => {

  const createUserUseCase = new CreateUser(new UserDexieRepository()); 

    return (
      <>
        <FormRegister onRegister={(user) => createUserUseCase.execute(user)}/>
      </>
    )
  }
  
  export default Register
  