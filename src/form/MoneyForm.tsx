import {ReactElement} from "react";
import {Box, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import {Controller} from "react-hook-form";
import FormInputPropsT from "../types/FormInputPropsT";

export const MoneyForm = ({control, fieldName, label}: FormInputPropsT
): ReactElement => (
    <Box>
        <Stack>
            <Divider/>
            <Typography variant="subtitle1">{label}</Typography>
            <Grid container direction="row" columnSpacing={2}>
                <Grid item xs={8}>
                    <Controller
                        name={`${fieldName}.magnitude`}
                        control={control}
                        render={({
                           field: { onChange, value },
                           fieldState: { error },
                        }) => (
                            <TextField
                                helperText={error ? error.message : null}
                                error={!!error}
                                onChange={onChange}
                                value={value}
                                fullWidth
                                label="Amount"
                                variant="outlined"
                            />
                        )} />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        name={`${fieldName}.currency`}
                        control={control}
                        render={({
                                     field: { onChange, value },
                                     fieldState: { error },
                                 }) => (
                            <TextField
                                helperText={error ? error.message : null}
                                error={!!error}
                                onChange={onChange}
                                value={value}
                                fullWidth
                                label="Currency"
                                variant="outlined"
                            />
                        )}/>
                </Grid>
            </Grid>
        </Stack>
    </Box>
);