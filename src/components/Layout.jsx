import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo.png';
import { useState } from 'react';
import { EmojiEvents, FolderZip, Link as LinkIcon, Person, School } from '@mui/icons-material';

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
  {
    item: 'Achievements',
    link: '/achievements',
    icon: <EmojiEvents />,
  },
  {
    item: 'Useful Links',
    link: '/useful-links',
    icon: <LinkIcon />,
  },
];

const Navbar = ({ onClickMenu }) => {
  const NavbarItem = ({ item, link, icon }) => (
    <Link
      href={link}
      underline="none"
      mx={2}
      sx={{
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'row',
        alignItems: 'center',
        color: '#ffffff',
        userSelect: 'none',
        cursor: 'pointer',
      }}
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
          <Link href="/" underline="none">
            <img src={logo} alt={'Jimmy Wang'} width={32} height={32}></img>
          </Link>
          {mdNavbarList}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const DrawerContent = () => {
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navbarItems.map((item) => (
          <ListItem key={item.item} disablePadding>
            <ListItemButton href={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.item} />
            </ListItemButton>
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
  return (
    <>
      <header>
        <Navbar onClickMenu={toggleSideMenu} />
      </header>
      <main>{children}</main>

      <footer>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: '#1976d2',
          }}
        >
          Hello world footer!
        </Box>
      </footer>
      <Drawer open={showSideMenu} anchor={'left'} variant={'temporary'} onClose={toggleSideMenu}>
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default Layout;
