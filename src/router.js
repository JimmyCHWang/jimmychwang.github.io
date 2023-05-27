import { createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    }
]);

export default router;
