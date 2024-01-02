// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const SidebarCamaras: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Banhaia</h2>

      <ul>
        <li className="mb-2">
          <Link href="/">Inicio</Link>
        </li>
        <li className="mb-2">
          <Link href="#instructivos">Instructivos</Link>
        </li>
        <li className="mb-2">
          <Link href="#descargas">Descargas</Link>
        </li>
        <li className="mb-2">
          <Link href="#solicitudes">Solicitudes</Link>
        </li>
        <li className="mb-2">
          <Link href="#contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarCamaras;
