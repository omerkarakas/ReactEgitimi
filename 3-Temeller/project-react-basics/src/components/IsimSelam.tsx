type Props = {
  isim: string;
};

const IsimSelam = ({ isim }: Props) => {
  return <p className="text-lg">Merhaba, {isim}!</p>;
};

export default IsimSelam;
