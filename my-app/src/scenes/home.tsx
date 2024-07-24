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

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export const openInNewTab = (url: string): void => {
    window.open(`https://${url}`, '_blank')
}


export default function Home(props: Props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

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
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

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
                            <Button key={item} sx={{color: '#fff'}}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
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
                            <Stack direction="row" spacing={1} ml={1}>
                                <Chip variant="outlined" label="React" size="small" />
                                <Chip variant="outlined" label="Angular" size="small" />
                                <Chip variant="outlined" label="TS" size="small" />
                                <Chip variant="outlined" label="JAVA" size="small" />
                                <Chip variant="outlined" label="AWS" size="small" />
                                <Chip variant="outlined" label="CICD" size="small" />
                            </Stack>
                        </Box>
                    </Box>
                    <Box justifyContent={'flex-end'} width={{sm: '100%', md: '40%'}} ml={'auto'}>
                        <img src={require('../assets/img1.JPG')} alt="img1"
                             style={{width: '100%', height: 'auto'}}/>
                    </Box>
                </Box>
                <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Stack direction="row" spacing={1}>
                        <Chip icon={<LinkedInIcon/>} label="LinkedIn" clickable onClick={()=>openInNewTab('www.google.com')}/>
                        <Chip icon={<GitHubIcon/>} label="GitHub" clickable onClick={()=>openInNewTab('www.google.com')}/>
                        <Chip icon={<InstagramIcon/>} label="Instagram" clickable onClick={()=>openInNewTab('www.google.com')}/>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}