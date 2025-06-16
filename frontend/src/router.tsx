import { createBrowserRouter, RouterProvider } from "react-router";
import Template from "@components/Template";
import Home from "@pages/Home";
import Videos from "@pages/Videos";
import Ranking from "@pages/Ranking";
import History from "@pages/History";
import User from "@pages/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/classificacao",
                element: <Ranking />
            },
            {
                path: "/videos",
                element: <Videos />
            },
            {
                path: "/historico",
                element: <History />
            },
            {
                path: "/participante/:username",
                element: <User />
            }
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />
}