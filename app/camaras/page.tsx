'use client';
import Link from 'next/link';
import LayoutSidebar from '../components/LayoutSidebar';
import { Logo } from '../components/Logo';
import { Contacto } from '../components/camaras/Contacto';
import { Descargas } from '../components/camaras/Descargas';
import { Instructivos } from '../components/camaras/Instructivos';
import SidebarCamaras from '../components/camaras/SidebarCamaras';
import { Solicitudes } from '../components/camaras/Solicitudes';

export default function Home() {
  return (
    <div>
      <LayoutSidebar sidebar={<SidebarCamaras />}>
        <Link href="/">
          <Logo />
        </Link>
        <Instructivos />
        <Descargas />
        <Solicitudes />
        <Contacto />
      </LayoutSidebar>
    </div>
  );
}
