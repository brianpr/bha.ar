import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function WhatsappQR({
  nombre,
  titulo,
  texto,
  mensaje,
  height = '150px',
}) {
  // acá se ejecuta javascript o typescript

  const numeros = [
    {
      nombre: 'Patricio',
      numero: 5491170141339,
      imagen: 'qr-patricio.png',
    },
    {
      nombre: 'Nicolas',
      numero: 5491122550627,
      imagen: 'qr-nicolas.png',
    },
  ];

  const seleccionado = numeros.find((f) => f.nombre === nombre);

  if (!seleccionado) {
    return <h2>NO ENCONTRADO</h2>;
  }

  const baseURL = `https://api.whatsapp.com/send?phone=${seleccionado.numero}`;
  const postURL = `${baseURL}&text=${mensaje || ''}`;
  const qrURL = useBaseUrl(`img/whatsapp/${seleccionado.imagen}`);

  // acá se genera el html del componente
  return (
    <div
      style={{
        textAlign: 'center',
        border: '2px solid #0b6e56',
        width: '200px',
        margin: '15px auto',
        padding: '15px 10px',
        background: '#30bf39',
        borderRadius: '10px',
      }}
    >
      <div style={{ marginTop: '-9px', fontSize: '15px', color: '#fff' }}>
        {titulo}
      </div>

      <a href={postURL} target="_blank" style={{ height }}>
        <img src={qrURL} alt={mensaje} style={{ height }} />

        <div style={{ fontSize: '15px' }}>
          <button
            style={{ color: '#fff' }}
            className="button button--success button--outline button--sm"
          >
            {texto}
          </button>
        </div>
      </a>
    </div>
  );
}
