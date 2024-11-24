export default class NumberFormatter {
    private decimalPoint: string = ".";
    private separator: string = ",";
    private opInput: string = "";
    private mantissa: string = "00";
    private characteristic: string = "0";

    public static builder(): NumberFormatter {
        return new NumberFormatter();
    }

    /**
     * Format the value provided before in groups of three with
     * group separator and decimal point provided before. round mantissa
     * to two decimal points.
     */
    public format(): string {
        const parts = this.opInput.split(this.decimalPoint);
        switch (parts.length) {
            case 1:
                this.characteristic = this.formatCharacteristic(parts[0]);
                break;
            case 2:
                this.characteristic = this.formatCharacteristic(parts[0]);
                this.mantissa = this.formatMantissa(parts[1]);
                break;
            default:
                return "Error: only one decimal point in number string allowed.";
        }

        return this.characteristic + this.decimalPoint + this.mantissa;
    }

    private formatCharacteristic(characteristic: string): string {
        const stripped = this.stripLeadingZeros(characteristic);
        return this.groupAsThree(stripped);
    }

    private formatMantissa(mantissa: string): string {
        const stripped = this.stripTrailingZeros(mantissa);

        if (stripped.length > 1) {
            const mant = Number.parseFloat(`0.${stripped}`).toFixed(2).toString();
            return mant.replace(/^0\./,"");
        }

        return "00";
    }

    /**
     * Set the separator symbol. Ensures a single-digit separator is used.
     * If longer separator symbol is provided, only first character will be used.
     * If empty string is provided, defaults ',' will be used;
     *
     * @param separator
     */
    public withSeparator(separator: string): NumberFormatter {
        if(separator.length > 1) {
            this.separator=separator[0];
            return this;
        }

        if(separator.length <= 0) {
            return this;
        }

        this.separator = separator;
        return this;
    }

    public withDecimalPoint(decimalPoint: string) {
        this.decimalPoint = decimalPoint;
        return this;
    }

    public withValue(value: string): NumberFormatter {
        this.opInput = value;
        return this;
    }

    //    str = '12345678';
    //    i      01234567
    //    count      4321 -->    345,678
    //           4321	  -->  2,345,678
    //           1        --> 12,345.678
    private groupAsThree(input: string): string {
        let grouped = "";
        let count = 0;
        let separator = this.separator;

        // escape out regexp reseve characters
        const match = this.separator.match(/[+*?^$\\.[\]{}()|]/);
        if (match && match.length > 0) {
            separator = `\\${this.separator}`;
        }

        // remove all separator symbols to correct misplacements
        const pattern = new RegExp(`${separator}+`, "g");
        const cleaned = input.replaceAll(pattern,"");

        for(let i= cleaned.length-1; i >= 0; i--) {
            if (++count < 4) {
                grouped =  cleaned[i] + grouped;
                continue;
            }
            grouped =  cleaned[i] + this.separator + grouped;
            count = 1;
        }

        return grouped;
    }

    private stripLeadingZeros(input: string): string {
        const s = input.replace(/^0+/, "");
        if (s.length === 0) {
            return "0";
        }

        return s;
    }

    private stripTrailingZeros(input: string): string {
        return input.replace(/0+$/, "");
    }
}