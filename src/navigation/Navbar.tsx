import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="sidebar">
    <div className="mb-8">
      {/* <h1 className="text-2xl font-bold text-white"></h1> */}
      <Link href="/">{props.logo}</Link>
    </div>

    <ul>
      <li className="mb-4">
        <a
          href="#instructivos"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Instructivos
        </a>
      </li>
      <li className="mb-4">
        <a
          href="#descargas"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Descargas
        </a>
      </li>
      <li className="mb-4">
        <a
          href="#solicitudes"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Solicitudes
        </a>
      </li>
      <li className="mb-4">
        <a
          href="#contacto"
          className="block px-4 py-2 rounded hover:bg-gray-700"
        >
          Contacto
        </a>
      </li>
    </ul>

    <style jsx>
      {`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 250px;
          background-color: #333;
          color: white;
          padding: 20px;
        }
      `}
    </style>
  </div>
);

export { Navbar };
