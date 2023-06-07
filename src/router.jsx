import { createHashRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import UnderConstructionPage from './components/UnderConstructionPage';
import ProjectsPage from './components/ProjectsPage';
import AcademicsPage from './components/AcademicsPage';

const router = createHashRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/projects',
        element: <ProjectsPage />,
    },
    {
        path: '/academics',
        element: <AcademicsPage />,
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
