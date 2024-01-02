import { useRouter } from 'next/navigation';

import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (_props: ILogoProps) => {
  return (
    <Image
      className="object-contain md:object-scale-down m-auto"
      src={`/logo.png`}
      width={200}
      height={50}
      alt="Banhaia informatica"
    />
  );
};

export { Logo };
