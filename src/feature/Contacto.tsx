const Contacto = () => (
  <div className="">
    <h2 id="contacto" className="text-3xl font-bold mb-4">
      Contacto
    </h2>

    <div className="container mx-auto p-8">
      <div className="flex space-x-4">
        <div className="flex-1">
          <p className="font-bold mb-2">PATRICIO</p>
          <a
            href="https://wa.me/5491161187463"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            WhatsApp
          </a>
        </div>
        <div className="flex-1">
          <p className="font-bold mb-2">NICOLAS</p>
          <a
            href="https://wa.me/5491122550627"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-bold mb-2">SEGUINOS EN NUESTRAS REDES</p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
          >
            Instagram
          </a>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            TikTok
          </a>
          <a
            href="#"
            className="bg-facebook-blue hover:bg-facebook-darkblue text-white py-2 px-4 rounded"
          >
            Facebook
          </a>
        </div>
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

export { Contacto };
