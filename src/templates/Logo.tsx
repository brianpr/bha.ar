import { useRouter } from 'next/router';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (_props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  // const fontStyle = props.xl
  // ? 'font-semibold text-3xl'
  // : 'font-semibold text-xl';
  const router = useRouter();

  return (
    <img
      className="object-contain md:object-scale-down"
      src={`/${router.basePath}logo.png`}
      alt="Banhaia informatica"
    />

    //   {AppConfig.site_name}
    // </span>
  );
};

export { Logo };
