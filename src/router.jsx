import { createBrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import UnderConstructionPage from './components/UnderConstructionPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/projects',
        element: <UnderConstructionPage />,
    },
    {
        path: '/academics',
        element: <UnderConstructionPage />,
    },
    {
        path: '/achievements',
        element: <UnderConstructionPage />,
    },
    {
        path: '/useful-links',
        element: <UnderConstructionPage />,
    },
]);

export default router;
