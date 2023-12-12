import React, { useState } from 'react';

import { Logo } from '@/templates/Logo';

const PasswordGenerator: React.FC = () => {
  const [generatedPassword, setGeneratedPassword] = useState<string>('');
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const generateRandomPassword = (): string => {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    let password = '';

    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  };

  const generatePassword = () => {
    const newPassword = generateRandomPassword();
    setGeneratedPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div style={{ maxWidth: '300px' }} className="text-center">
        <Logo />
      </div>

      <h1 className="text-3xl font-bold mb-4">
        Generador de Contraseñas Seguras
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={generatePassword}
      >
        Generar Contraseña
      </button>
      {generatedPassword && (
        <div className="flex flex-col items-center">
          <p className="mb-2">Contraseña Generada:</p>
          <div className="flex items-center">
            <input
              type="text"
              value={generatedPassword}
              readOnly
              className="border border-gray-300 px-2 py-1 mr-2"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={copyToClipboard}
            >
              Copiar
            </button>
          </div>
          {copySuccess && (
            <p className="text-green-500 mt-2">
              Contraseña copiada al portapapeles
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
