import CurrencyE, {CurrencyESchema} from "./CurrencyE";
import {InferType, object, string} from "yup";

export const MoneyTSchema = object({
    value: string().required("Must provide a value, even if 0"),
    currency: CurrencyESchema.required(),
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