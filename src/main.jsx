import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import { HelmetProvider } from "react-helmet-async";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register/> ,
      },
      {
        path: "/login",
        element: <Login /> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);
