import CurrencyE from "./CurrencyE";

type MoneyT = {
    magnitude: number;
    currency: CurrencyE;
}
export const defaultMoney: MoneyT = {
    magnitude: 0,
    currency: CurrencyE.EUR,
};


/*
    Creating field names as strings in a typesafe way which
    is supervised by the compiler for use with string-based introspection in
    libs such as react-form-hook, etc.
 */
type MoneyFieldNamesT = {
    magnitude: keyof Pick<MoneyT, "magnitude">;
    currency: keyof Pick<MoneyT, "currency">;
};

export const fieldNames: MoneyFieldNamesT = {
    magnitude: "magnitude",
    currency: "currency"
} as const;

export default MoneyT;