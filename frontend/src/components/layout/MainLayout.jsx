import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

/**
 * MainLayout
 * The primary shell for authenticated users or public content pages.
 * Includes the top Navbar and a main content area for the router Outlet.
 */
export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      
      {/* 
        The main content area grows to fill available space.
        pt-16 accounts for the fixed navbar height (assuming h-16 or similar).
      */}
      <main className="flex-grow pt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <Outlet />
        </div>
      </main>

      {/* Placeholder for future Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CodeShastra.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
