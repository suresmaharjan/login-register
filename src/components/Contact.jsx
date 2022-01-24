import React from 'react'
import {
    Grid,
    Box,
    TextField,
    Button,
    Paper
} from "@mui/material";
// import CssBaseline from '@mui/material/CssBaseline';

const inputFieldValues = [
    {
        name: "fullName",
        label: "Full Name",
        id: "my-name"
    },
    {
        name: "email",
        label: "Email",
        id: "my-email"
    },
    {
        name: "message",
        label: "Message",
        id: "my-message",
        multiline: true,
        rows: 10
    }
];


const Contact = () => {
    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <form autoComplete="off" onSubmit={handleFormSubmit}>
                        {inputFieldValues.map((inputFieldValue, index) => {
                            return (
                                <TextField
                                    key={index}
                                    onChange={handleInputValue}
                                    onBlur={handleInputValue}
                                    name={inputFieldValue.name}
                                    label={inputFieldValue.label}
                                    error={errors[inputFieldValue.name]}
                                    multiline={inputFieldValue.multiline ?? false}
                                    fullWidth
                                    rows={inputFieldValue.rows ?? 1}
                                    autoComplete="none"
                                    {...(errors[inputFieldValue.name] && {
                                        error: true,
                                        helperText: errors[inputFieldValue.name]
                                    })}
                                />
                            );
                        })}
                        <Button
                            variant="contained"
                            type="submit"
                            color="secondary"
                            disabled={!formIsValid()}
                        >
                            Send Message
                        </Button>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Contact;