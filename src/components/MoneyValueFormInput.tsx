import FormInputPropsT from "../types/FormInputPropsT";
import {Controller} from "react-hook-form";
import {ReactElement} from "react";
import {TextField} from "@mui/material";
import {NumericFormat} from "react-number-format";

const NumberFormatInput = (props: object) => {
    // @ts-ignore
    const {inputRef, onChange, name} = props;

    return (
        <NumericFormat
            getInputRef={inputRef}
            onValueChange={values => {
                // @ts-ignore
                onChange({
                    target: {
                        name: name,
                        value: values.value
                    }
                })}}
            thousandSeparator
        />);
}

const MoneyValueFormInput = ({fieldName, control, label}: FormInputPropsT): ReactElement => (
    <Controller
        name={fieldName}
        control={control}
        render={({field: {onChange, value}, fieldState: { error }}) => {
            const muiProps = {
                error: !!error,
                helperText: error ? "only two digits after decimal point allowed" : null
            };
            return (
                <NumericFormat
                    thousandSeparator
                    onChange={onChange}
                    value={value}
                    customInput={TextField}
                    {...muiProps}
                />
            );
        }}/>
);

export default MoneyValueFormInput;