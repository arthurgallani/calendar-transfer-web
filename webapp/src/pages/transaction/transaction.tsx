export interface Transaction {
    id: number;
    accountFrom: number;
    accountTo: number;
    value: number;
    valueType: string;
    transactionType: string;
    valueTax: number;
    sumValue: number;
    dateTransfer: string;
    dateSchedule: string;
    balance: number;
}