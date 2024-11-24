import {ReactElement} from "react";
import {Box, Button, Grid, Paper, Stack} from "@mui/material";
import {useForm} from "react-hook-form";
import ExpenseT, {defaultExpense, ExpenseTSchema, fieldNames} from "../types/ExpenseT";
import TextFormInput from "../components/TextFormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import {MoneyFormInput} from "../components/MoneyFormInput";

const ExpenseForm = (): ReactElement => {
    const { control, handleSubmit } = useForm<ExpenseT>({
        defaultValues: defaultExpense,
        resolver: yupResolver(ExpenseTSchema)
    });

    const onSubmit = (data: ExpenseT) => {
        console.log(`Expense of ${data.amount.value} ${data.amount.currency} for: ${data.purpose}`);
    }

    return (
        <Box padding={2} maxWidth={600}>
            <Paper elevation={3}>
                <Box padding={2}>
                    <Stack spacing={4}>
                        <TextFormInput
                            control={control}
                            fieldName={fieldNames.purpose}
                            label="What for is Dash?"
                        />
                        <MoneyFormInput
                            control={control}
                            fieldName={fieldNames.amount}
                        />
                        <Button onClick={handleSubmit(onSubmit)}>SAVE</Button>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
}
export default ExpenseForm;
