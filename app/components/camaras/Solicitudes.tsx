import Link from 'next/link';

const Solicitudes = () => (
  <div className="max-w-4xl mx-auto">
    <h2 id="solicitudes" className="text-3xl font-bold mb-4">
      Solicitudes
    </h2>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <p>
        Hace tu consulta en{' '}
        <Link href="https://www.bha.ar/tickets">www.bha.ar/tickets</Link>
      </p>

      {/* Tarjeta con botón */}
      <div className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Realizar consulta
        </button>
      </div>
    </div>

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
