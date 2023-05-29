import './App.css';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { RouterProvider } from 'react-router-dom';

import router from './router';
import ColorModeContext from './components/ColorModeContext';

const App = () => {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

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
                <RouterProvider router={router} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
