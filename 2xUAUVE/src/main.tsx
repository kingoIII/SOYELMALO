import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; // App is now our main layout
import WelcomeAnimation from './components/WelcomeAnimation';
import HomePage from './pages/HomePage';
import './index.css';

// Placeholder components for other routes, can be created later
const SoundsPage: React.FC = () => <div className="p-5 text-white">Sounds Page Content</div>;
const SkillsPage: React.FC = () => <div className="p-5 text-white">Skills Page Content</div>;
const CommunityPage: React.FC = () => <div className="p-5 text-white">Community Page Content</div>;
const StudioPage: React.FC = () => <div className="p-5 text-white">Studio Page Content</div>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeAnimation />, // Welcome animation is standalone
  },
  {
    path: '/', // All other routes will use App as layout
    element: <App />,
    children: [
      {
        path: 'home', // path is relative to parent
        element: <HomePage />,
      },
      {
        path: 'sounds',
        element: <SoundsPage />,
      },
      {
        path: 'skills',
        element: <SkillsPage />,
      },
      {
        path: 'community',
        element: <CommunityPage />,
      },
      {
        path: 'studio',
        element: <StudioPage />,
      },
      // Add other routes from your header nav here as placeholders
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
