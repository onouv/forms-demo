import {ReactElement} from "react";
import {Box, Button, Paper, Stack} from "@mui/material";
import {useForm} from "react-hook-form";
import ExpenseT, {defaultExpense} from "./ExpenseT";
import {MoneyForm} from "./MoneyForm";
import TextFormInput from "../components/TextFormInput";

const ExpenseForm = (): ReactElement => {
    const { control, handleSubmit } = useForm<ExpenseT>({ defaultValues: defaultExpense });

    const onSubmit = (data: ExpenseT) => {
        console.log(`Expense of ${data.amount.magnitude} ${data.amount.currency} for ${data.purpose}`);
    }

    return (
        <Box padding={2} maxWidth={600}>
            <Paper elevation={3}>
                <Box padding={2}>
                    <Stack spacing={4}>
                        <TextFormInput
                            control={control}
                            fieldName="purpose"
                            label="Purpose"
                        />
                        <MoneyForm
                            control={control}
                            label="How Much Dash?"
                            fieldName="amount"
                        />
                        <Button onClick={handleSubmit(onSubmit)}>SAVE</Button>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
}
export default ExpenseForm;
