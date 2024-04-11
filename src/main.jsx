import React from 'react';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Jobs from './components/Jobs/Jobs';
import Statistics from './components/Statistics/Statistics';
import JobDetails from './components/JobDetails/JobDetails';
import AuthProvider from './AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/jobs',
        element: <Jobs />,
        loader: () => fetch('../jobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/jobDetail/:id',
        element: <JobDetails />,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
