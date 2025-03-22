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
import CloseIcon from '@mui/icons-material/Close';
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel, Snackbar
} from "@mui/material";
import {Footer} from "../components/layout/footer";
import {AccordionElement} from "../components/Accordion/AccordionElement";

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Home() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    
    const handleClick = React.useCallback((nav: string) => {
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
    },[]);

    const handleClose =  React.useCallback((event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    },[]);

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
                    <AccordionElement 
                        id={"panel1-header"} 
                        ariaControls={"panel1-content"}
                        title={"Projects"}
                        details={[
                            "ClimbFUnity Web app",
                            "MdLand SDOH Web app",
                            "MdLand SDOH Admin Web app",
                            "MdLand SDOH Chrome Extension",
                            "MdLand IPH Web app",
                            "Club Monaco HK eshop",
                            "Nike and Sacai HK event site",
                            "Varadise DWSS Web app"
                        ]}/>
                    <AccordionElement
                        id={"panel2-header"}
                        ariaControls={"panel2-content"}
                        title={"Experience"}
                        details={[
                            "Senior Software Developer---MDLand,Canada",
                            "Software Developer---MDLand,Canada",
                            "Full-Stack Developer---Digidumpling,Hong Kong"
                        ]}/>
                    <AccordionElement
                        id={"panel3-header"}
                        ariaControls={"panel3-content"}
                        title={"Outdoor Climbing Experience"}
                        details={[
                            "Squmaish-BC,Canada",
                            "Niagara Glen-ON,Canada",
                            "Everywhere in Hong Kong",
                            "Mitake-Japan",
                            "Long Dong-Taiwan",
                            "Guanziling-Taiwan",
                            "El Chorro-Spain",
                            "Green Climbers Home-Laos",
                            "Krabi-Thailand",
                            "Nam Pha Pa Yai-Thailand"
                        ]}/>
                </Box>
                <Footer/>
            </Box>
        </Box>
    );
}