import {defaultMoney, MoneyTSchema} from "./MoneyT";
import {InferType, object, string} from "yup";
/*
type ExpenseT = {
    purpose: string;
    amount: MoneyT;
}
*/
const TWO_DIGIT_DECIMAL_US: RegExp =
    /^(0|[1-9][0-9]{0,2}(?:(,[0-9]{3})*|[0-9]*))(\.[0-9]{1,2}){0,1}$/g;


export const ExpenseTSchema = object({
    purpose: string().required(),
    amount: string().required().matches(TWO_DIGIT_DECIMAL_US),
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