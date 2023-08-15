import React, { useEffect, useState } from 'react';
import {
    Card,
    Box,
    Button
} from '@mui/material';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone'; import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Alert } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];


const DashboardScreen = () => {

    const [loading, setLoading] = useState(false);
    const [rows, setRows] = useState([]);
    const [fetchError, setFetchError] = useState({ error: false, message: '' })
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true)
        axios.get('https://dev-df8xlyuz2326t9d.api.raw-labs.com/user').then(result => {
            setRows(result.data);
            setFetchError({ error: false, message: '' })
            setLoading(false)

        }).catch(error => {
            setFetchError({ error: true, message: error.message })
            setRows([])
            setLoading(false);
        })
    }, [])

    const onLogoutClick = () => {
        navigate('/login')
    }

    return (
        <Box
            sx={{ width: '70%', maxWidth: '700px', margin: 'auto', display: 'flex', flexDirection: 'column' }}
            role='main'
            aria-label='Main content'
        >
            <Button
                onClick={onLogoutClick}
                sx={{ alignSelf: 'end', marginBottom: '.2rem' }}
                variant="text"
                color="secondary"
                aria-label='Logout'
            >
                Logout
            </Button>
            <Card role='region' aria-label='User list section'>
                <Box sx={{ marginTop: '.5rem' }}>
                    <Box sx={{ marginTop: '.3rem' }}>
                        <PeopleAltTwoToneIcon color='primary' fontSize='large' aria-hidden='true' />
                    </Box>
                    <Box
                        sx={{ fontWeight: 'bold', marginTop: '-1.5rem', marginBottom: '-1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        aria-label='User list'
                    >
                        <h3>Users list</h3>
                        {loading && <>&nbsp;&nbsp;<CircularProgress size={'1rem'} aria-label='Loading indicator' /></>}
                    </Box>
                </Box>

                <div style={{ height: 400, width: '100%' }} role='grid' aria-label='User data grid'>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        aria-label='User data grid'
                    />

                </div>
                {fetchError.error && <Alert severity="error" role='alert'>{fetchError.message}</Alert>}

            </Card>
        </Box>

    );
};

export default DashboardScreen;