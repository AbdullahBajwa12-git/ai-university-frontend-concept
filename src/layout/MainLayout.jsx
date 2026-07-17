import { ReactLenis } from 'lenis/react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';

const MainLayout = () => {
  return (
    <ReactLenis root>
      <div className="min-h-screen flex flex-col bg-bg-base text-text-primary">
        <Navbar />

        <main className="flex-grow">
          <Outlet />
        </main>

        <footer className="py-8 text-center text-text-secondary text-sm border-t border-border-subtle mt-20">
          &copy; {new Date().getFullYear()} StudyRoute. All rights reserved.
        </footer>
      </div>
    </ReactLenis>
  );
};


export default MainLayout;
