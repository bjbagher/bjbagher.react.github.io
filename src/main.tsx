import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from "./routes/blog"
import './index.css'
import BlogPost from './routes/blogpost';

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
