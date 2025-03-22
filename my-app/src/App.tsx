import React from 'react';
import './App.css';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router";
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./scenes/Home";
import OShi from "./scenes/music/OShi";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path={"/oshi"} element={<OShi/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
