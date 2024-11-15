# Motivation 
In React Hook Form, it is not very clear how to create a sub-form that can be integrated in a larger, more complex form 
and takes care of a certain sub-type of the overall form data type. This demo shows an approach
that I came up with after quite a bit of unsuccessful web research. It is using React Material UI components.

# Summary

In this demo, there is a parent form component (`ExpenseForm`) filling a parent data type
(`ExpenseT`). It is using a child form component (`MoneyForm`) which is filling a field 
of `ExpenseT` of type `MoneyT`.

In short, the key point of this design approach are: 
- the parent component creates a Control object by means of the react-hook-form hook 
`useForm<ExpenseT>(...)`.
- the parent component must pass the name of the field in its form type, which must be filled
by the child component to it as a parameter. In this case, `ExpenseForm` passes the string
`amount` to `MoneyForm`, since that is what the field of type `MoneyT` is called in the `ExpenseT` type.
- the child component must then add the correct names of the sub-fields as defined in the child-type `MoneyT` to
the parameter and use the results as `name` parameter for the `Controller`.



# Advantages

# Disadvantages


# Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
