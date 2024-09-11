import clsx from 'clsx';
import styles from './styles.module.css';
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
    title: 'Instructivos',
    icon: 'fluent-emoji:desktop-computer',
    description: <>Tutoriales para ver las camaras en celular o pc</>,
    link: '/docs/videovigilancia/instructivos',
  },
  {
    title: 'Descargas',
    icon: 'bx:cctv',
    description: <>Descargar programas: SmartPSS, Imou, DMSS, etc.</>,
    link: '/docs/videovigilancia/descargas',
  },
  {
    title: 'Solicitudes',
    icon: 'fluent:cloud-flow-20-filled',
    description: <>Realizá una consulta o solicitá una cotización</>,
    link: '/docs/videovigilancia/solicitudes',
  },
  // {
  //   title: 'Generador de contraseñas',
  //   icon: 'fluent:password-16-filled',
  //   description: <>Herramienta para generacion de contraseñas</>,
  //   link: '/docs/herramientas/password-generator',
  // },
];

function Feature({ icon, title, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--3 margin-2')}>
      <Link href={link}>
        <div className="card">
          <div className="card__header">
            <h3>{title}</h3>
          </div>
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
