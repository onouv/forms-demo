import {defaultMoney, MoneyTSchema} from "./MoneyT";
import {InferType, object, string} from "yup";


export const ExpenseTSchema = object({
    purpose: string().required(),
    amount: string().required(),

});
Object.freeze(ExpenseTSchema);

type ExpenseT = InferType<typeof ExpenseTSchema>;

export const defaultExpense: ExpenseT = {
    purpose: "",
    amount: "0.00"
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