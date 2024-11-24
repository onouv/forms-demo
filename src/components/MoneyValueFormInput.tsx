import FormInputPropsT from "../types/FormInputPropsT";
import {Controller} from "react-hook-form";
import {ReactElement} from "react";
import {TextField} from "@mui/material";
import {NumericFormat} from "react-number-format";


const MoneyValueFormInput = ({fieldName, control, label}: FormInputPropsT): ReactElement => (
    <Controller
        name={fieldName}
        control={control}
        render={({field: {onChange, value}, fieldState: { error }}) => {
            const muiProps = {
                error: !!error,
                helperText: error ? "a value entry is required" : null,
                label: label
            };
            return (
                <NumericFormat
                    thousandSeparator
                    decimalScale={2}
                    fixedDecimalScale
                    onChange={onChange}
                    value={value}
                    customInput={TextField}
                    {...muiProps}

                />
            );
        }}/>
);

export default MoneyValueFormInput;