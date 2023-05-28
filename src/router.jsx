import { createBrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/projects',
    element: <div>Projects Page</div>,
  },
  {
    path: '/academics',
    element: <div>Projects Page</div>,
  },
  {
    path: '/achievements',
    element: <div>Projects Page</div>,
  },
  {
    path: '/useful-links',
    element: <div>Projects Page</div>,
  },
]);

export default router;
