import React, { ReactNode } from 'react';

import { Footer } from './Footer';
import { Logo } from './Logo';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = (props: { children?: ReactNode }) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {/* <Hero /> */}
    <div className="w-1/3">
      <Logo />
    </div>
    {props.children}
    <Footer />
  </div>
);

export { Base };
