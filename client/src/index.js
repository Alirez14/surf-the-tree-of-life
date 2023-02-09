import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageHome from "./Pages/page-home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHome></PageHome>,

        children: [],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
);
