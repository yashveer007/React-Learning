import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from "react-router-dom";
import Books from "./components/feature/Books";
import Authors from "./components/feature/Authors";
import Home from "./components/feature/Home";
import LoginRegister from "./components/login/LoginRegister";
import { store } from "./Store/store";
import { Provider } from "react-redux";

const commonCss = "bg-cyan-500 w-full h-96";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home commonCss={commonCss} />} />
      <Route path="books" element={<Books commonCss={commonCss} />} />
      <Route path="authors" element={<Authors commonCss={commonCss} />} />
      <Route path="login" element={<LoginRegister commonCss={commonCss} />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
