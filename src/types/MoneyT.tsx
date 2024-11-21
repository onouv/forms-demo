import CurrencyE, {CurrencyESchema} from "./CurrencyE";
import {InferType, object, string} from "yup";

const TWO_DIGIT_DECIMAL_US: RegExp =
    /^(0|[1-9][0-9]{0,2}(?:(,[0-9]{3})*|[0-9]*))(\.[0-9]{1,2}){0,1}$/g;

export const MoneyTSchema = object({
    value: string().required().matches(TWO_DIGIT_DECIMAL_US),
    currency: CurrencyESchema,
});

type MoneyT = InferType<typeof MoneyTSchema>;

export const defaultMoney: MoneyT = {
    value: "0.00",
    currency: CurrencyE.EUR,
};


/*
    Creating field names as strings in a typesafe way which
    is supervised by the compiler for use with string-based introspection in
    libs such as react-form-hook, etc.
 */
type MoneyFieldNamesT = {
    value: keyof Pick<MoneyT, "value">;
    currency: keyof Pick<MoneyT, "currency">;
};

export const fieldNames: MoneyFieldNamesT = {
    value: "value",
    currency: "currency"
} as const;

export default MoneyT;