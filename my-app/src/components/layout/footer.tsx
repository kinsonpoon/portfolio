import React from 'react';
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import {openInNewTab} from "../../utils/function/openInNewTab";


export const Footer = () => {
    return(
        <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Stack direction="row" spacing={1}>
                <Chip icon={<LinkedInIcon/>} label="LinkedIn" clickable onClick={()=>openInNewTab('LinkedIn.com/in/king-hin-poon-aa7858134')}/>
                <Chip icon={<GitHubIcon/>} label="GitHub" clickable onClick={()=>openInNewTab('https://github.com/kinsonpoon')}/>
                <Chip icon={<InstagramIcon/>} label="Instagram" clickable onClick={()=>openInNewTab('https://www.instagram.com/o0kinson0o/?hl=en')}/>
            </Stack>
        </Box>
    )
}