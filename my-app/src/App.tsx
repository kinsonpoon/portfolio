import React from 'react';
import './App.css';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./scenes/home";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Home/>
        </ThemeProvider>
    );
}

export default App;
