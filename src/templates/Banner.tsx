import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Conocé todos nuestros servicios"
      subtitle="Videovigilancia, servicio tecnico de pc, sistema de gestion"
      button={
        <Link href="https://www.banhaia.com/">
          <Button>banhaia.com</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
