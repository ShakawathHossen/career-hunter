import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Compoments/Statistics/Statistics';
import Blog from './Compoments/Blog/Blog';
import AppliedJob from './Compoments/AppliedJobs/AppliedJob';
import Home from './Compoments/Home/Home';
import Banner from './Compoments/Banner/Banner';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    children: [
      {
        path: "/",
        element: <Banner/>
      },
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
