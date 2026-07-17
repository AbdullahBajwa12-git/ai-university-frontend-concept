import { ReactLenis } from 'lenis/react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen flex flex-col">
        {/* Minimal Navigation */}
        <header className="fixed top-0 w-full z-50 p-6 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="text-xl font-bold tracking-tight text-white">
              UniFinder <span className="text-blue-500">Concept</span>
            </div>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow pt-20">
          <Outlet />
        </main>

        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800 mt-20">
          &copy; {new Date().getFullYear()} UniFinder Concept. All rights reserved.
        </footer>
      </div>
    </ReactLenis>
  );
};

export default MainLayout;
