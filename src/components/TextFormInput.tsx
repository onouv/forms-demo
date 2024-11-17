import {Controller, useFormContext} from "react-hook-form";
import {TextField} from "@mui/material";
import FormInputPropsT from "../types/FormInputPropsT";

const TextFormInput = ({ fieldName, label }: FormInputPropsT) => {

    const { control } = useFormContext();

    return (
        <Controller
            name={fieldName}
            control={control}
            render={({
                         field: { onChange, value },
                         fieldState: { error }
                     }) => (
                <TextField
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={label}
                    variant="outlined"
                />
            )}
        />
    );
};

export default TextFormInput;