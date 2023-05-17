import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PageHome from "./Pages/PageHome";
import PageTree from "./Pages/PageTree";
import PageCreateIndividual from "./Pages/PageCreateIndividual";
import PageIndividuals from "./Pages/PageIndividuals";
import PageUpdateIndividual from "./Pages/PageUpdateIndividual";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageHome></PageHome>,
		children: [],
	},
	{
		path: "tree",
		element: <PageTree></PageTree>
	},
	{
		path: "/individuals/create",
		element: <PageCreateIndividual></PageCreateIndividual>
	},
	{
		path: "/individuals/:id",
		element: <PageUpdateIndividual></PageUpdateIndividual>
	}, 
	{
		path: "/individuals",
		element: <PageIndividuals></PageIndividuals>
	}
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
