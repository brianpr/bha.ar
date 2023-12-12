import Link from 'next/link';

const Solicitudes = () => (
  <div className="">
    <h2 id="solicitudes" className="text-3xl font-bold mb-4">
      Solicitudes
    </h2>

    <p>
      Hace tu consulta en{' '}
      <Link href="https://www.bha.ar/tickets">www.bha.ar/tickets</Link>
    </p>
    <style jsx>
      {`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 250px;
          background-color: #333;
          color: white;
          padding: 20px;
        }
      `}
    </style>
  </div>
);

export { Solicitudes };
