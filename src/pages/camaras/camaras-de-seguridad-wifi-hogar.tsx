import React, { useState } from 'react';
import Layout from '@theme/Layout';

function CustomPage() {
  return (
    <Layout>
      <iframe
        src="https://tepuedeinteresar.com/camaras"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        allowFullScreen
      />
    </Layout>
  );
}

export default CustomPage;
