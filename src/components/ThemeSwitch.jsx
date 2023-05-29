import { useContext } from 'react';
import ColorModeContext from './ColorModeContext';
import { Switch, Box } from '@mui/material';
import { useTheme } from '@emotion/react';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeSwitch = () => {
    const theme = useTheme();
    const themeIsDark = theme.palette.mode === 'dark';
    const colorMode = useContext(ColorModeContext);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <LightModeIcon />
            <Switch checked={themeIsDark} color="default" onChange={colorMode.toggleColorMode} />
            <DarkModeIcon />
        </Box>
    );
};

export default ThemeSwitch;
