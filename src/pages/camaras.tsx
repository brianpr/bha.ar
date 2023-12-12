import { Contacto } from '@/feature/Contacto';
import { Descargas } from '@/feature/Descargas';
import { Instructivos } from '@/feature/Instructivos';
import { Solicitudes } from '@/feature/Solicitudes';
import { Hero } from '@/templates/Hero';
import { WithSidebar } from '@/templates/WithSidebar';

const Camaras = () => (
  <WithSidebar>
    <Hero />
    <Instructivos />
    <Descargas />
    <Solicitudes />
    <Contacto />
  </WithSidebar>
);

export default Camaras;
