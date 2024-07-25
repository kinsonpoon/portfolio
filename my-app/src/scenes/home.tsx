import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import {
    Accordion, AccordionDetails,
    AccordionSummary,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel, Snackbar
} from "@mui/material";

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export const openInNewTab = (url: string): void => {
    window.open(`https://${url}`, '_blank')
}


export default function Home() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClick = (nav: string) => {
        switch (nav){
            case 'Home':
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'About':
                setOpen(true);
                break;
            case 'Contact':
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                break;
        }
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Developers
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}} onClick={()=>handleClick(item)}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Developers
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{color: '#fff'}} onClick={()=>handleClick(item)}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Hi There! I am Kinson. :)"
                action={action}
            />
            <Box component="main" p={{xs: 1, sm: 2, md: 3}} width={'100%'}>
                <Toolbar/>
                <Box>
                    <div className="typewriter">
                        <h1>Hi there! I am Kinson. :)</h1>
                    </div>
                </Box>
                <Box display={{sm: 'block', md: 'flex'}} mt={{xs: 4, sm: 4, md: 0}}>
                    <Box mb={{xs: 2, sm: 2, md: 0}} display={'flex'} justifyContent={'center'}
                         width={{sm: '100%', md: '40%'}} flexDirection={'column'} ml={{xs:0,sm:0,md:'15%'}}>
                        <Box display={'flex'}  alignItems={'center'} mb={2}>
                            <Typography>I am a </Typography>
                            <Stack direction="row" spacing={1} ml={1}><Chip label="SWE"/>
                                <Chip label="Rock Climber"/></Stack>
                        </Box>
                        <Box mb={2}>
                            <Typography>Highly motivated and results-driven IT professional with a proven track record
                                of success in delivering innovative technology solutions.</Typography>
                        </Box>
                        <Box display={'flex'}  alignItems={'center'}>
                            <Typography>
                                Skills:
                            </Typography>
                            <Stack direction="row" spacing={1} ml={1} useFlexGap flexWrap="wrap">
                                <Chip variant="outlined" label="React" size="small" />
                                <Chip variant="outlined" label="Angular" size="small" />
                                <Chip variant="outlined" label="TS" size="small" />
                                <Chip variant="outlined" label="JAVA" size="small" />
                                <Chip variant="outlined" label="AWS" size="small" />
                                <Chip variant="outlined" label="FirseBase" size="small" />
                                <Chip variant="outlined" label="Lambda" size="small" />
                                <Chip variant="outlined" label="SpringBoot" size="small" />
                            </Stack>
                        </Box>
                        <Box>
                            <FormControl sx={{ mt: 2 }} component="fieldset" variant="standard">
                                <FormLabel component="legend">Languages</FormLabel>
                                <FormGroup sx={{flexDirection:{xs: 'column', sm: 'row', md: 'row'}}}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={true} name="English" />
                                        }
                                        label="English"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={true} name="Chinese" />
                                        }
                                        label="Chinese(Mandarin & Cantonese)"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={true} name="Japanese" />
                                        }
                                        label="Japanese"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Box>
                        <Box>
                            <img src={require('../assets/hong-kong.png')} alt="img2"
                                 style={{width: '50px', height: 'auto'}}/>
                            <img src={require('../assets/canada.png')} alt="img3"
                                 style={{width: '50px', height: 'auto', marginLeft: '10px'}}/>
                        </Box>
                    </Box>
                    <Box justifyContent={'flex-end'} width={{sm: '100%', md: '40%'}} ml={'auto'}>
                        <img src={require('../assets/img1.JPG')} alt="img1"
                             style={{width: '100%', height: 'auto'}}/>
                    </Box>
                </Box>
                <Box mt={2}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Projects
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>- ClimbFUnity Web app</Typography>
                            <Typography>- MdLand SDOH Web app</Typography>
                            <Typography>- MdLand IPH Web app</Typography>
                            <Typography>- Club Monaco HK eshop</Typography>
                            <Typography>- Nike and Sacai HK event site</Typography>
                            <Typography>- Varadise DWSS Web app</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            Experience
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Senior Software Developer---MDLand,Canada</Typography>
                            <Typography>Software Developer---MDLand,Canada</Typography>
                            <Typography>Full-Stack Developer---Digidumpling,Hong Kong</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel3-header"
                        >
                            Outdoor Climbing Experience
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Squmaish-BC,Canada</Typography>
                            <Typography>Niagara Glen-ON,Canada</Typography>
                            <Typography>Everywhere in Hong Kong</Typography>
                            <Typography>Mitake-Japan</Typography>
                            <Typography>Long Dong-Taiwan</Typography>
                            <Typography>Guanziling-Taiwan</Typography>
                            <Typography>El Chorro-Spain</Typography>
                            <Typography>Green Climbers Home-Laos</Typography>
                            <Typography>Krabi-Thailand</Typography>
                            <Typography>Nam Pha Pa Yai-Thailand</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Stack direction="row" spacing={1}>
                        <Chip icon={<LinkedInIcon/>} label="LinkedIn" clickable onClick={()=>openInNewTab('LinkedIn.com/in/king-hin-poon-aa7858134')}/>
                        <Chip icon={<GitHubIcon/>} label="GitHub" clickable onClick={()=>openInNewTab('https://github.com/kinsonpoon')}/>
                        <Chip icon={<InstagramIcon/>} label="Instagram" clickable onClick={()=>openInNewTab('https://www.instagram.com/o0kinson0o/?hl=en')}/>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}