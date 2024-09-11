import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { Icon } from '@iconify/react';
import WhatsappQR from '../components/whatsapp/WhatsappQR.component';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Inicio ${siteConfig.title}`} description="bha">
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <div>
          <div className="row">
            <div className="col col--2 text--center"></div>
            <div className="col col--4 text--center">
              <WhatsappQR
                titulo=""
                nombre="Patricio"
                texto="Hablar con Patricio"
                mensaje="Hola, quiero más infromación"
              />
            </div>
            <div className="col col--4 text--center">
              <WhatsappQR
                titulo=""
                nombre="Nicolas"
                texto="Hablar con Nicolas"
                mensaje="Hola, quiero más infromación"
              />
            </div>
            <div className="col col--2 text--center"></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
