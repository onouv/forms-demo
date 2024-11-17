import {ReactElement} from "react";
import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
import TextFormInput from "./TextFormInput";
import FormInputPropsT from "../types/FormInputPropsT";
import {fieldNames} from "../types/MoneyT";

export const MoneyFormInput = ({fieldName, label}: FormInputPropsT
): ReactElement => {
    return (
        <Box>
            <Stack>
                <Divider/>
                <Typography variant="subtitle1">{label}</Typography>
                <Grid container direction="row" columnSpacing={2}>
                    <Grid item xs={8}>
                        <TextFormInput
                            fieldName={`${fieldName}.${fieldNames.magnitude}`}
                            label="Amount"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextFormInput
                            fieldName={`${fieldName}.${fieldNames.currency}`}
                            label="Currency"
                        />
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}