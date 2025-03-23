import * as React from 'react';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import {Outlet} from 'react-router';
import {Footer} from "./Footer";
import Header from "./Header";

export default function MainLayout() {

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header/>
            <Box component="main" p={{xs: 1, sm: 2, md: 3}} width={'100%'}>
                <Toolbar/>
                <Outlet />
                <Footer/>
            </Box>
        </Box>
    );

}