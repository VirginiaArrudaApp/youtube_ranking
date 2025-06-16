import { createBrowserRouter, RouterProvider } from "react-router";
import Template from "@components/Template";
import Home from "@pages/Home";
import Videos from "@pages/Videos";

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
                path: "/videos",
                element: <Videos />
            }
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />
}