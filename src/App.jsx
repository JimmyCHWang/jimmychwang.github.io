import './App.css';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { RouterProvider } from 'react-router-dom';

import router from './router';
import ColorModeContext from './components/ColorModeContext';

const App = () => {
    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                localStorage.setItem('themeMode', mode === 'light' ? 'dark' : 'light');
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [mode]
    );
    React.useEffect(() => {
        if (localStorage.getItem('themeMode')) {
            setMode(localStorage.getItem('themeMode'));
        }
    }, []);

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
