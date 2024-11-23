export default class NumberFormatter {
    private decimalPoint: string = ".";
    private separator: string = ",";
    private opInput: string = "";
    private mantissa: string = "00";
    private characteristic: string = "0";

    public static builder(): NumberFormatter {
        return new NumberFormatter();
    }

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

        return this.characteristic + this.separator + this.mantissa;
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

    public withSeparator(separator: string): NumberFormatter {
        this.separator = separator;
        return this;
    }

    public withDecimalPoint(decimalPoint: string) {
        this.decimalPoint = decimalPoint;
    }

    public withValue(value: string): NumberFormatter {
        this.opInput = value;
        return this;
    }

    //    str = '12345678';
    //    i      01234567
    //    c          4321 -->    345,678
    //           4321	  -->  2,345,678
    //           1        --> 12,345.678
    private groupAsThree(input: string): string {
        let grouped = "";
        let count = 0;
        for(let i= input.length-1; i >= 0; i--) {
            if (++count < 4) {
                grouped =  input[i] + grouped;
                continue;
            }
            grouped =  input[i] + this.separator + grouped;
            count = 1;
        }

        return grouped;
    }

    private stripLeadingZeros(input: string): string {
        return input.replace(/^0+/, "");
    }

    private stripTrailingZeros(input: string): string {
        return input.replace(/0+$/, "");
    }
}