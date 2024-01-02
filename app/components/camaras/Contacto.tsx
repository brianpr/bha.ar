import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const Contacto = () => (
  <div className="max-w-4xl mx-auto">
    <h2 id="contacto" className="text-3xl font-bold my-4">
      Contacto
    </h2>

    <div className="container mx-auto p-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <p className="font-bold mb-2">PATRICIO</p>
          <a
            href="https://wa.me/5491161187463"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            <FaWhatsapp className="mr-2" />
            WhatsApp
          </a>
        </div>
        <div className="flex-1">
          <p className="font-bold mb-2">NICOLAS</p>
          <a
            href="https://wa.me/5491122550627"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            <FaWhatsapp className="mr-2" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-bold mb-2">SEGUINOS EN NUESTRAS REDES</p>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/banhaia_"
            className="flex items-center bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
          >
            <FaInstagram className="mr-2" />
            Instagram
          </a>
          <a
            href="#"
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            <FaTiktok className="mr-2" />
            TikTok
          </a>
          <a
            href="https://www.tiktok.com/@banhaia"
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
