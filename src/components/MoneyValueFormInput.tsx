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

const MoneyValueFormInput = ({fieldName, control, label}: FormInputPropsT): ReactElement => {


    return (
        <Controller
            name={fieldName}
            control={control}
            render={({field: {onChange, value}, fieldState: { error }}) => (
                <TextField
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    size="medium"
                    fullWidth
                    label={label}

                    slots={{ input: NumberFormatInput }}
                />
            )}
        />
    );
}

export default MoneyValueFormInput;