import { useState } from "react";
import { Fieldset } from "../../components/Fieldset";
import { Figure, Form, FormActions, Heading, Image } from "../../components/Form";
import { FormLabel } from "../../components/FormLabel";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { useAuthenticateUser } from "../../hooks/useAuthenticateUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { authenticate } = useAuthenticateUser()
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const loginUser = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(credentials);
        try {
            await authenticate(credentials.email, credentials.password)
            setCredentials({ email: '', password: '' });
            toast.success('Autenticado com sucesso!')
            navigate("/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error?.message || 'Falha ao autenticar!')
        }
    };

    return (
        <>
            <Figure>
                <Image src="/imgs/login.png" />
            </Figure>
            <div>
                <Heading>
                    Login
                </Heading>
                <p>Preencha os dados do login.</p>
                <Form onSubmit={loginUser}>
                    <Fieldset>
                        <FormLabel>
                            Email
                        </FormLabel>
                        <TextField
                            name="email"
                            type="email"
                            placeholder="Digite seu email"
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        />
                    </Fieldset>
                    <Fieldset>
                        <FormLabel>
                            Senha
                        </FormLabel>
                        <TextField
                            name="password"
                            type="password"
                            placeholder="Digite sua senha"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </Fieldset>
                    <FormActions>
                        <Button type="submit">
                            Efetuar login
                        </Button>
                    </FormActions>
                </Form>
            </div>
        </>
    );
};