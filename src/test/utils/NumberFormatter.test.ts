import NumberFormatter from "../../utils/NumberFormatter";




describe("NumberFormatter'", () => {

    describe("Given default formatting", () => {

        let defaultFormatter: NumberFormatter

        beforeEach(() => {
            defaultFormatter = NumberFormatter.builder();
        });

        it("should format '0' to '0.00'", () => {
            const actual = defaultFormatter
                .withValue("0")
                .format();
            expect(actual).toBe("0.00");
        });

        it("should format '00' to '0.00'", () => {
            const actual = defaultFormatter
                .withValue("0")
                .format();
            expect(actual).toBe("0.00");
        });

        it("should format '0.0' to '0.00'", () => {
            const actual = defaultFormatter
                .withValue("0.0")
                .format();
            expect(actual).toBe("0.00");
        });

        it("should format '0.00' to '0.00'", () => {
            const actual = defaultFormatter
                .withValue("0.00")
                .format();
            expect(actual).toBe("0.00");
        });

        it("should format '1' to '1.00'", () => {
            const actual = defaultFormatter
                .withValue("1")
                .format();
            expect(actual).toBe("1.00");
        });

        it("should format '1.0' to '1.00'", () => {
            const actual = defaultFormatter
                .withValue("1.0")
                .format();
            expect(actual).toBe("1.00");
        });

        it("should format '1.00' to '1.00'", () => {
            const actual = defaultFormatter
                .withValue("1.00")
                .format();
            expect(actual).toBe("1.00");
        });

        it("should format '1.1256' to '1.13'", () => {
            const actual = defaultFormatter
                .withValue("1.1256")
                .format();
            expect(actual).toBe("1.13");
        });

        it("should format '1.1246' to '1.12'", () => {
            const actual = defaultFormatter
                .withValue("1.1246")
                .format();
            expect(actual).toBe("1.12");
        });

        it("should format '1.0146' to '1.01'", () => {
            const actual = defaultFormatter
                .withValue("1.0146")
                .format();
            expect(actual).toBe("1.01");
        });

        it("should format '1.0049' to '1.00'", () => {
            const actual = defaultFormatter
                .withValue("1.0049")
                .format();
            expect(actual).toBe("1.00");
        });

        it("should format '1.0052' to '1.01'", () => {
            const actual = defaultFormatter
                .withValue("1.0052")
                .format();
            expect(actual).toBe("1.01");
        });

        it("should format '123' to '123.00'", () => {
            const actual = defaultFormatter
                .withValue("123")
                .format();
            expect(actual).toBe("123.00");
        });

        it("should format '1234' to '1,234.00'", () => {
            const actual = defaultFormatter
                .withValue("1234")
                .format();
            expect(actual).toBe("1,234.00");
        });

        it("should format '12345' to '12,345.00'", () => {
            const actual = defaultFormatter
                .withValue("12345")
                .format();
            expect(actual).toBe("12,345.00");
        });

        it("should format '123456' to '123,456.00'", () => {
            const actual = defaultFormatter
                .withValue("123456")
                .format();
            expect(actual).toBe("123,456.00");
        });

        it("should format '1234567' to '1,234,567.00'", () => {
            const actual = defaultFormatter
                .withValue("1234567")
                .format();
            expect(actual).toBe("1,234,567.00");
        });

        it("should format '123,456' to '123,456.00'", () => {
            const actual = defaultFormatter
                .withValue("123,456")
                .format();
            expect(actual).toBe("123,456.00");
        });

        it("should format '1,234,567' to '1,234,567.00'", () => {
            const actual = defaultFormatter
                .withValue("1,234,567")
                .format();
            expect(actual).toBe("1,234,567.00");
        });

        it("should format '12,345,678' to '12,345,678.00'", () => {
            const actual = defaultFormatter
                .withValue("12,345,678")
                .format();
            expect(actual).toBe("12,345,678.00");
        });

        it("should format '12,,345,,,67,8' to '12,345,678.00'", () => {
            const actual = defaultFormatter
                .withValue("12,,345,,,67,8")
                .format();
            expect(actual).toBe("12,345,678.00");
        });
    });

    describe("Given non-default formatting", () => {

        let nonDefaultFormatter: NumberFormatter

        beforeEach(() => {
            nonDefaultFormatter = NumberFormatter.builder()
                .withSeparator(".")
                .withDecimalPoint(",");
        });

        it("should format '0' to '0,00'", () => {
            const actual = nonDefaultFormatter
                .withValue("0.0")
                .format();

            expect(actual).toBe("0,00");
        });

        it("should format '12345678,0053' to '12.345.678,01'", () => {
            const actual = nonDefaultFormatter
                .withValue("12345678,0053")
                .format();

            expect(actual).toBe("12.345.678,01");
        });

        it("should format '1.234.567' to '1.234.567,00'", () => {
            const actual = nonDefaultFormatter
                .withValue("1.234.567")
                .format();
            expect(actual).toBe("1.234.567,00");
        });

        it("should format '12.345.678' to '12.345.678,00'", () => {
            const actual = nonDefaultFormatter
                .withValue("12.345.678")
                .format();
            expect(actual).toBe("12.345.678,00");
        });

        it("should format '12..345...67.8' to '12.345.678,00'", () => {
            const actual = nonDefaultFormatter
                .withValue("12..345...67.8")
                .format();
            expect(actual).toBe("12.345.678,00");
        });
    })

});