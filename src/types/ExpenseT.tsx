import MoneyT, {defaultMoney} from "./MoneyT";

type ExpenseT = {
    purpose: string;
    amount: MoneyT;
}

export const defaultExpense: ExpenseT = {
    purpose: "",
    amount: defaultMoney
}

//
// typesafe field names for use with string-based introspection
//
type ExpenseFieldNamesT = {
    purpose: keyof Pick<ExpenseT, "purpose">;
    amount: keyof Pick<ExpenseT, "amount">;
};
export const fieldNames: ExpenseFieldNamesT = {
    purpose: "purpose",
    amount: "amount"
} as const;

export default ExpenseT;