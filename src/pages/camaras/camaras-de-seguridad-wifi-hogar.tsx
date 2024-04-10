import React, { useState } from 'react';
import Layout from '@theme/Layout';

function CustomPage() {
  return (
    <Layout>
      <iframe
        src="https://ventas.banhaia.com/camaras-de-seguridad-wifi-hogar"
        style={{ width: '100%', height: '100vh', border: 'none' }}
        allowFullScreen
      />
    </Layout>
  );
}

export default CustomPage;
