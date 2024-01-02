'use client';
import React, { useState, ReactNode, useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import Sidebar from './Sidebar';

interface LayoutProps {
  sidebar?: ReactNode;
  children: ReactNode;
}

const LayoutSidebar: React.FC<LayoutProps> = ({ children, sidebar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Ocultar el botón cuando el menú está abierto
  const toggleButtonClass = sidebarOpen ? 'hidden' : 'block';

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const sidebar = document.getElementById('sidebar');

      if (sidebar && !sidebar.contains(target)) {
        closeSidebar();
      }
    };

    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isLink = target.tagName === 'A' && target.closest('#sidebar');

      if (isLink) {
        // Aquí puedes agregar cualquier lógica adicional que necesites al hacer clic en un enlace dentro de la barra lateral
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav
        id="sidebar"
        className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${
          sidebarOpen ? 'block' : 'hidden'
        } lg:block lg:w-64`} 
      >
        {sidebar || <Sidebar />}
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Floating Toggle Button */}
        <button
          className={`lg:hidden fixed top-2 left-2 bg-gray-900 text-white p-2 rounded-full ${toggleButtonClass}`}
          onClick={toggleSidebar}
        >
          <MdMenu size={24} />
        </button>

        {/* Page Content */}
        <main
          className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-2`}
        >
          <div className="pt-10 lg:pt-1">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default LayoutSidebar;
