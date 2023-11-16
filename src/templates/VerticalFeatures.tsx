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

    {/* <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    /> */}
  </Section>
);

export { VerticalFeatures };
