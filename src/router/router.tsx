import { createBrowserRouter } from "react-router-dom";
import { Radix } from "../Radix";
import { Batman, Domus } from "../paginae";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Radix/>,
        children: [
            {
                path: 'domus',
                element: <Domus />
            },
            {
                path: 'batman',
                element: <Batman />
            }
        ]
    }
]);