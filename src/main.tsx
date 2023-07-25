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
import Macro from "@/modules/macro/macro";
import GptPage from "@/modules/gpt/gpt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />},
      {
        path: "/home",
        element: <Home />},
      {path:"/macro",element:<Macro/>},
      { path: "/news", element: <News /> },
      { path: "/gpt", element: <GptPage /> },
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
