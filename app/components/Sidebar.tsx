// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      {/* Título */}
      <h2 className="text-2xl font-bold mb-4">Banhaia</h2>

      {/* Enlaces de la barra lateral */}
      <ul>
        <li className="mb-2">
          <Link href="/">Inicio</Link>
        </li>
        <li className="mb-2">
          <Link href="https://www.banhaia.com/servicio-tecnico">Servicio tecnico</Link>
        </li>
        <li className="mb-2">
          <Link href="/camaras">Camaras</Link>
        </li>
        <li className="mb-2">
          <Link href="https://www.ninoxnet.com">NinoxNet</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
