import Link from '@docusaurus/Link';
import React, { useState } from 'react';

export default function PasswordGeneratorComponent(): JSX.Element {
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
    <div className="container">
      <div className="">
        <h1 className="">Generador de Contraseñas Seguras</h1>
        <button className="button button--primary" onClick={generatePassword}>
          Generar Contraseña
        </button>
        {generatedPassword && (
          <div className="">
            <p className="margin-top--md">Contraseña Generada:</p>
            <div className="flex-container flex-row row-gap-2">
              <div className="flex-1">
                <input
                  type="text"
                  value={generatedPassword}
                  readOnly
                  className="form-control"
                />
              </div>
              <div>
                <button
                  className="button button--outline button--success"
                  onClick={copyToClipboard}
                >
                  Copiar
                </button>
              </div>
            </div>
            {copySuccess && (
              <div className="alert alert--success margin-2">
                
                Contraseña copiada al portapapeles
                
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
