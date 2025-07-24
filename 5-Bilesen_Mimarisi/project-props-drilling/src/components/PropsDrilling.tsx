export const Seviye1 = ({ isim }: { isim: string }) => <Seviye2 isim={isim} />;

const Seviye2 = ({ isim }: { isim: string }) => <Seviye3 isim={isim} />;

const Seviye3 = ({ isim }: { isim: string }) => <p>Merhaba, {isim}</p>;
