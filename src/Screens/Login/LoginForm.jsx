import React, { useState } from 'react';
import {
    Card,
    CardContent,
    TextField,
    Box,
    Checkbox,
    FormControlLabel
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Your email is invalid, try again')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Minimum password length is 8 charachters')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigate('/home')
            }, 3000)
        },
    });

    return (

        <Card sx={{ maxWidth: '25rem', margin: 'auto' }}>
            <Box sx={{ marginTop: '.5rem' }}>
                <Box sx={{ marginTop: '.3rem' }}>
                    <LockTwoToneIcon color='primary' fontSize='large' />
                </Box>
                <Box sx={{ fontWeight: 'bold', marginTop: '-1.5rem', marginBottom: '-1rem' }}>
                    <h3>Login</h3>
                </Box>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <CardContent >
                    <Grid container spacing={2}>
                        <Grid xs={12} md={12}>
                            <TextField
                                autoFocus
                                
                                fullWidth
                                size='small'
                                id="email"
                                name="email"
                                label="Email"
                                value={formik.values.email || null}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid xs={12} md={12}>
                            <TextField
                                fullWidth
                                size='small'
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={formik.values.password ||null}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <FormControlLabel control={<Checkbox defaultChecked size='small' />} label="Remember my credentials" />
                        </Grid>
                        <Grid xs={12}>
                            <LoadingButton
                                loading={loading}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Login
                            </LoadingButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </form>
        </Card>

    );
};

export default LoginScreen;