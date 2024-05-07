import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './CSS/App.css'

import App from './App'
import { Navbar } from 'react-bootstrap'
import About from './About'
import Blog from "./Card"
import Projects from "./Projects"
import Resume from "./Resume";
import Footer from "./Footer"
import ErrorPage from './ErrorPage'

const site = import.meta.env.BASE_URL

function Layout() {
  return (
    <>
      <Navbar />
      <div id="page-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
//gos inside the children array.
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  }
],
  {
    basename: site,
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
