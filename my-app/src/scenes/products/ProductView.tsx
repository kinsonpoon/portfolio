import React from 'react';
import Box from "@mui/material/Box";
import { InstagramEmbed } from 'react-social-media-embed';
import Typography from "@mui/material/Typography";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const posts =["C4CaspESMnX","C4CWGXByqpO","C4A-UKXSQ-Q","C3zKGndyWX8","C3xOc8gSDqV","C3txCB9yftt","Cz4JB9wyo9F","Cz4I4VVycde","Cz4IsLuS6oz","Cz4HsJVScji", "Cz4HUITyVI2", "Cz4HCJzy2ol"];

export const ProductView = () => {
    return(
        <Box>
            <Box display={'flex'} justifyContent={"space-between"} mb={{xs:0,md:4}} mt={1}>
                <Typography display={'flex'} ><LocalShippingIcon/>   Within Canada</Typography>
                <Typography display={'flex'} >PM for more detail</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
                {posts.map((post) => (
                    <div className={"instagramPostContainer"}>
                        <InstagramEmbed key={post} url={`https://www.instagram.com/p/${post}/`} width={328}/>
                    </div>
                ))}
            </Box>
        </Box>
    )
}