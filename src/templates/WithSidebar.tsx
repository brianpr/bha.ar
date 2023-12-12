import React, { ReactNode } from 'react';

import { Navbar } from '@/navigation/Navbar';

import { Footer } from './Footer';
import { Logo } from './Logo';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const WithSidebar = (props: { children?: ReactNode }) => (
  <div>
    <Meta title={AppConfig.title} description={AppConfig.description} />

    <Navbar logo={<Logo />} />

    <div className="content">
      {props.children}

      <Footer />
    </div>

    <style jsx>
      {`
        .content {
          margin-left: 250px;
          padding: 20px;
        }
      `}
    </style>
  </div>
);

export { WithSidebar };
