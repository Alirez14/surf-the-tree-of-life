import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PageHome from "./Pages/PageHome";
import PageSightingForm from "./Pages/PageSightingForm";
import PageSightings from "./Pages/PageSightings";
import PageTree from "./Pages/PageTree";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageHome></PageHome>,
		children: [],
	},
	{
		path: "tree",
		element: <PageTree></PageTree>,
	},
	{
		path: "sighting-form",
		element: <PageSightingForm></PageSightingForm>,
	},
	{
		path: "sightings",
		element: <PageSightings></PageSightings>,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
