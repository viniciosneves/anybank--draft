import { TransactionAmount, TransactionDate, TransactionInfo, TransactionType, TransactionWrapper } from "./styles";

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
};

export interface ITransaction {
    id: number;
    value: number;
    type: string;
    date: Date;
  }
  
  interface TransactionProps {
    transaction: ITransaction;
  }

export const Transaction = ({ transaction }: TransactionProps) => {
    const { value, type, date } = transaction;
    const formattedDate = formatDate(date);
    const formattedValue = currencyFormatter.format(value);

    return (
        <TransactionWrapper>
            <TransactionInfo>
                <TransactionType>{type}</TransactionType>
                <TransactionDate>{formattedDate}</TransactionDate>
            </TransactionInfo>
            <TransactionAmount>{formattedValue}</TransactionAmount>
        </TransactionWrapper>
    );
};