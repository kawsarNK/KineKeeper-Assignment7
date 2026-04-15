import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/mainlayout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import TimeLine from "../pages/timelines/TimeLine";
import ErrorPage from "../pages/errorpage/ErrorPage";
import State from "../pages/states/State";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/TimeLine",
                element: <TimeLine />
            },
            {
                path: "/State",
                element: <State />
            }
        ],
        errorElement: <ErrorPage />
    }
]);
