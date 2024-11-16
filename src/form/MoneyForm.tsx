import {ReactElement} from "react";
import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
import TextFormInput from "../components/TextFormInput";
import FormInputPropsT from "../types/FormInputPropsT";
import {fieldNames} from "./MoneyT";

export const MoneyForm = ({control, fieldName, label}: FormInputPropsT
): ReactElement => (
    <Box>
        <Stack>
            <Divider/>
            <Typography variant="subtitle1">{label}</Typography>
            <Grid container direction="row" columnSpacing={2}>
                <Grid item xs={8}>
                    <TextFormInput
                        control={control}
                        fieldName={`${fieldName}.${fieldNames.magnitude}`}
                        label="Amount"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextFormInput
                        control={control}
                        fieldName={`${fieldName}.${fieldNames.currency}`}
                        label="Currency"
                    />
                </Grid>
            </Grid>
        </Stack>
    </Box>
);