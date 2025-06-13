import { createBrowserRouter, RouterProvider } from "react-router";
import Template from "@components/Template";
import Home from "@pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />
}