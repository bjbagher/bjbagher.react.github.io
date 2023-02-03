import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Blog from "./routes/blog";
import "./index.css";
import BlogPost from "./routes/blogpost";
import ThemeProvider from "./provider";
import App from './routes/root'


const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "blog/:id",
        element: <BlogPost />,
      },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
);
