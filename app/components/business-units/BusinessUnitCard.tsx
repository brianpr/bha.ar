import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BusinessUnitCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const BusinessUnitCard: React.FC<BusinessUnitCardProps> = ({
  title,
  imageSrc,
  link,
}) => {
  return (
    <div className="m-4 p-6 bg-white rounded-lg shadow-lg max-w-sm">
      <Image src={imageSrc} alt={title} width="200" height="200" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <Link href={link}>Ir a la seccion</Link>
    </div>
  );
};

export default BusinessUnitCard;
