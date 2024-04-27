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
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import AddTouristSpot from "./Pages/AddTouristSpot.jsx";
import ViewDetails from "./Pages/ViewDetails.jsx";
import AllTouristSpot from "./Pages/AllTouristSpot.jsx";
import MyList from "./Pages/MyList.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import UpdateSpot from "./Pages/UpdateSpot.jsx";
import Category from "./Pages/Category.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/allspot"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add-tourist-spot",
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/spot/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allspot/${params.id}`),
      },
      {
        path: "/all-tourist-spot",
        element: <AllTouristSpot />,
        loader: () => fetch("http://localhost:5000/allspot"),
      },
      {
        path: "my-list",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-spot/:id",
        element: (
          <PrivateRoute>
            <UpdateSpot />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allspot/${params.id}`),
      },
      {
        path: "/country/:country",
        element: <Category/>,
        loader: () => fetch("http://localhost:5000/allspot"),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
    <Toaster />
  </React.StrictMode>
);
