import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header'; // Import the Header

const App: React.FC = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <Header /> {/* Render the Header component */}
      <main className="layout-container flex h-full grow flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
