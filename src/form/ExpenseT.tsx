import MoneyT, {defaultMoney} from "./MoneyT";

type ExpenseT = {
    purpose: string;
    amount: MoneyT;
}

export const defaultExpense: ExpenseT = {
    purpose: "",
    amount: defaultMoney
}

export default ExpenseT;