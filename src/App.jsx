import React from 'react';
import {
  ThemeProvider
} from '@mui/material';
import './App.css'
import { mainTheme } from './Themes';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginScreen from './Screens/Login/LoginForm';
import DashboardScreen from './Screens/Dashboard/Dashboard';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/home" element={<DashboardScreen/>}/>
      </Routes>
    </ThemeProvider>
  )
}



export default App
