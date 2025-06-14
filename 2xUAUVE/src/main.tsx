import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; // Assuming App.tsx might hold layout later
import WelcomeAnimation from './components/WelcomeAnimation';
import HomePage from './pages/HomePage'; // Import HomePage
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeAnimation />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  // We can nest routes within App for common layout later if needed
  // For example:
  // {
  //   path: '/',
  //   element: <App />, // App component would contain <Outlet />
  //   children: [
  //     { index: true, element: <WelcomeAnimation /> }, // if we want animation under App layout too
  //     { path: "home", element: <HomePage /> }
  //   ]
  // }
  // For now, keeping WelcomeAnimation standalone.
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
