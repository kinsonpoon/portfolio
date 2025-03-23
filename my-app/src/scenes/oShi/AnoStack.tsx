import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Chip from "@mui/material/Chip";
import {openInNewTab} from "../../utils/function/openInNewTab";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function AnoStack() {
    return (
        <div>
            <Stack
                direction="row"
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={{alignItems: "flex-end"}}
            >
                <Chip variant="outlined" label="Official Site" onClick={()=>openInNewTab('ano-official.com/')}/>
                <Chip icon={<InstagramIcon/>} variant="outlined" label="Instagram" onClick={()=>openInNewTab('www.instagram.com/a_n_o2mass/?hl=ja')}/>
                <Chip icon={<XIcon/>} variant="outlined" label="X" onClick={()=>openInNewTab('x.com/ano_staff')}/>
            </Stack>
        </div>
    );
}
