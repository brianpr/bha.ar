import clsx from 'clsx';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';
import { ReactNode } from 'react';
import CustomIcon from '../common/Icon';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  icon: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Servicio tecnico de PC',
    icon: 'fluent-emoji:desktop-computer',
    description: <>Realizamos arreglos de pc, etc</>,
    link: '/docs/intro',
  },
  {
    title: 'Focus on What Matters',
    icon: 'bx:cctv',
    description: <>Videovigilancia; hogares, galerias, edificios</>,
    link: '/docs/videovigilancia',
  },
  {
    title: 'Sistema de gestion',
    icon: 'fluent:cloud-flow-20-filled',
    description: <>NinoxNet es un sistema de gestion...</>,
    link: '/docs/intro',
  },
  {
    title: 'Generador de contraseñas',
    icon: 'fluent:password-16-filled',
    description: <>Herramienta para generacion de contraseñas</>,
    link: '/docs/herramientas/password-generator',
  },
];

function Feature({ icon, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--3 margin-2')}>
      <Link href={link}>
        <div className="card">
          <div className="card__body">
            <CustomIcon icon={icon} />
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
