import {
    AppBar,
    Box,
    Drawer,
    Grid,
    IconButton,
    Link,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo.png';
import { useState } from 'react';
import { FolderZip, Person, School, GitHub, Email, LinkedIn } from '@mui/icons-material';
import ThemeSwitch from './ThemeSwitch';
import { Link as RouterLink } from 'react-router-dom';

const navbarItems = [
    {
        item: 'Bio',
        link: '/',
        icon: <Person />,
    },
    {
        item: 'Projects',
        link: '/projects',
        icon: <FolderZip />,
    },
    {
        item: 'Academics',
        link: '/academics',
        icon: <School />,
    },
    /*{
        item: 'Achievements',
        link: '/achievements',
        icon: <EmojiEvents />,
    },
    {
        item: 'Useful Links',
        link: '/useful-links',
        icon: <LinkIcon />,
    },*/
];

const Navbar = ({ onClickMenu }) => {
    const NavbarItem = ({ item, link, icon }) => (
        <Link
            component={RouterLink}
            mx={2}
            sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                alignItems: 'center',
                color: '#ffffff',
                userSelect: 'none',
                cursor: 'pointer',
            }}
            to={link}
            underline="none"
        >
            {icon}
            <Typography variant="h6" ml={1}>
                {item}
            </Typography>
        </Link>
    );

    const mdNavbarList = navbarItems.map((x) => <NavbarItem item={x.item} link={x.link} icon={x.icon} key={x.item} />);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'block', md: 'none' }, mr: 2 }}
                        onClick={onClickMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <RouterLink to="/">
                        <Box component="img" src={logo} alt={'Jimmy Wang'} sx={{ height: 32, width: 32 }} />
                    </RouterLink>
                    {mdNavbarList}
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <ThemeSwitch />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

const DrawerContent = () => {
    return (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListSubheader component="div">Pages</ListSubheader>
                {navbarItems.map((item) => (
                    <ListItem key={item.item} disablePadding>
                        <Link component={RouterLink} to={item.link} underline="none" color="text.primary">
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.item} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

const Layout = ({ children }) => {
    const [showSideMenu, setShowSideMenu] = useState(false);
    const toggleSideMenu = () => {
        setShowSideMenu(!showSideMenu);
    };
    const thisYear = new Date().getYear() + 1900;

    const refLinks = [
        {
            item: 'GitHub',
            link: 'https://github.com/JimmyCHWang',
            icon: <GitHub />,
        },
        {
            item: 'LinkedIn',
            link: 'https://www.linkedin.com/in/jimmychwang/',
            icon: <LinkedIn />,
        },
        {
            item: 'Email',
            link: 'mailto:wangjingheng0625@gmail.com',
            icon: <Email />,
        },
    ];

    const linkIcons = refLinks.map((item) => {
        return (
            <Link key={item.item} href={item.link} mx={2} color="text.primary" target="_blank">
                {item.icon}
            </Link>
        );
    });
    return (
        <>
            <header>
                <Navbar onClickMenu={toggleSideMenu} />
            </header>
            <main>{children}</main>

            <footer>
                <Grid container p={4}>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'left' }} my={2}>
                        Copyright &#xA9; {thisYear} Jimmy Wang
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ textAlign: { xs: 'left', md: 'right' } }} my={2}>
                        {linkIcons}
                    </Grid>
                </Grid>
            </footer>
            <Drawer open={showSideMenu} anchor={'left'} variant={'temporary'} onClose={toggleSideMenu}>
                <DrawerContent />
            </Drawer>
        </>
    );
};

export default Layout;
