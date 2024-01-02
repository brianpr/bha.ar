"use client"
import React from 'react';
import BusinessUnitCard from './BusinessUnitCard';

const BusinessUnits: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <BusinessUnitCard
        title="Servicio Técnico de PC"
        imageSrc="/logo.png" // Agrega la ruta de la imagen correspondiente
        link="https://www.banhaia.com/servicio-tecnico"
      />
      <BusinessUnitCard
        title="Videovigilancia"
        imageSrc="/logo.png" // Agrega la ruta de la imagen correspondiente
        link="/camaras"
      />
      <BusinessUnitCard
        title="Desarrollo de Software"
        imageSrc="/logo.png" // Agrega la ruta de la imagen correspondiente
        link="https://www.ninoxnet.com"
      />
    </div>
  );
};

export default BusinessUnits;
