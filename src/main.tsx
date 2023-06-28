import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { persistor, store } from "@/infra/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "@/errorPage";
import Home from "@/modules/home/home";
import Portfolio from "@/modules/portfolio/portfolio";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AnalysisDashboard from "@/modules/analysis/analysis";
import News from "@/modules/news/news";

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
      { path: "/news", element: <News /> },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/analysis",
        element: <AnalysisDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
