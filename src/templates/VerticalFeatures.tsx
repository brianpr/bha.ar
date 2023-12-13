import {
  IVerticalFeatureRowProps,
  VerticalFeatureRow,
} from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const features: IVerticalFeatureRowProps[] = [
  {
    title: 'SmartPSS',
    description: 'Para ver las camaras',
    image: '/assets/images/logo_smartpss.jpg',
    imageAlt: 'SmartPSS',
    links: [
      {
        label: 'SmartPSS 1',
        url: 'https://static.ninox.com.ar/bha/SmartPSS.rar',
      },
      {
        label: 'SmartPSS 2',
        url: 'https://static.ninox.com.ar/bha/SmartPSSv2.zip',
      },
      {
        label: 'SmartPSS LITE',
        url: 'https://static.ninox.com.ar/bha/SmartPSSLite-V1.003.zip',
      },
    ],
  },
];

const VerticalFeatures = () => (
  <Section title="Descargas" description="">
    {features.map((feature, index) => (
      <VerticalFeatureRow
        key={index}
        title={feature.title}
        description={feature.description}
        image={feature.image}
        imageAlt={feature.imageAlt}
        links={feature.links}
      />
    ))}
  </Section>
);

export { VerticalFeatures };
