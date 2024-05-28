import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Layout.jsx";
import { element } from "prop-types";
import PageOne from "./components/1.2_pages/Page01.jsx";
import PageTwo from "./components/1.2_pages/Page02.jsx";
import PageThree from "./components/1.2_pages/Page03.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
    ],
  },
  {
    path: "/page01",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <PageOne />,
      },
    ],
  },
  {
    path: "/page02",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <PageTwo />,
      },
    ],
  },
  {
    path: "/page03",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <PageThree />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
