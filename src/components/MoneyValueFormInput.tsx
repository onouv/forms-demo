import FormInputPropsT from "../types/FormInputPropsT";
import {Controller} from "react-hook-form";
import {ReactElement} from "react";
import {TextField} from "@mui/material";


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
                    fullWidth
                    label={label}
                    variant="outlined"/>
            )}
        />
    );
}

export default MoneyValueFormInput;