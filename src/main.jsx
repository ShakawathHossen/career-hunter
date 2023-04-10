import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Compoments/Layout/Layout';
import Statistics from './Compoments/Statistics/Statistics';
import Blog from './Compoments/Blog/Blog';
import AppliedJob from './Compoments/AppliedJobs/AppliedJob';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children: [
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "appliedjobs",
        element: <AppliedJob/>
      },
      {

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
