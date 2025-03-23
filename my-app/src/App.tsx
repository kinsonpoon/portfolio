import React from 'react';
import './App.css';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router";
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./scenes/Home";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";
import {ProductView} from "./scenes/products/ProductView";
import {GuitarSheetBuilder} from "./scenes/guitar/GuitarSheetBuilder";
import OShi from "./scenes/oShi/OShi";
import {SnackBarProvider} from "./context/SnackBarContext";

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
                <SnackBarProvider>
                    <Routes>
                        <Route element={<MainLayout/>}>
                            <Route path="/" element={<Home/>}/>
                            <Route path={"/oshi"} element={<OShi/>}/>
                            <Route path={"/products"} element={<ProductView/>}/>
                            <Route path={"/guitar"} element={<GuitarSheetBuilder/>}/>
                        </Route>
                    </Routes>
                </SnackBarProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
