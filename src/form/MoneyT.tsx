type MoneyT = {
    magnitude: number;
    currency: string;
}
export const defaultMoney: MoneyT = {
    magnitude: 0,
    currency: "EUR",
};

export default MoneyT;