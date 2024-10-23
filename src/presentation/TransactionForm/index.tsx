import { useEffect, useState } from "react"
import { Form, Heading, Wrapper } from "./styles"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { TextField } from "../../components/TextField"
import { FormLabel } from "../../components/FormLabel"
import { Dropdown } from "../../components/Dropdown"
import { ListTransactionTypes } from "../../domain/useCases/ListTransactionTypes"
import { TransactionTypeDexieRepository } from "../../infrastructure/dexie/TransactionTypeDexieRepository"
import { ITransactionType } from "../../domain/entities/ITransactionType"

const listTransactionType = new ListTransactionTypes(new TransactionTypeDexieRepository())


export const TransactionForm = () => {

    const [transactionTypes, setTransactionTypes] = useState<ITransactionType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await listTransactionType.execute();
            setTransactionTypes(result);
        };
        fetchData();
    }, []);


    const [transactionType, setTransactionType] = useState('')
    const [transactionValue, setSetTransactionValue] = useState('')

    const createTransacion = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        console.log({
            transactionType,
            transactionValue
        })
    }

    return (
        <Card>
            <Wrapper>
                <Form onSubmit={createTransacion}>
                    <Heading>
                        Nova transação
                    </Heading>
                    <fieldset>
                        <FormLabel>
                            Transação
                        </FormLabel>
                        <Dropdown
                            value={transactionType}
                            onChange={evt => setTransactionType(evt.target.value)}
                            required
                        >
                            <option value="" disabled hidden>
                                Selecione o tipo de transação
                            </option>
                            {transactionTypes.map(t => <option key={t.id} value={t.id}>{t.display}</option>)}
                            
                        </Dropdown>
                    </fieldset>
                    <fieldset>
                        <FormLabel>
                            Valor
                        </FormLabel>
                        <TextField
                            placeholder="R$ 00,00"
                            type="number"
                            value={transactionValue}
                            onChange={evt => setSetTransactionValue(evt.target.value)}
                            required
                        />
                    </fieldset>
                    <Button>
                        Concluir transação
                    </Button>
                </Form>
            </Wrapper>
        </Card>
    )
}