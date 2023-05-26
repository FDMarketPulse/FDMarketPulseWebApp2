import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "@/errorPage";
import Home from "@/modules/home/home";
import Portfolio from "@/modules/portfolio/portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
