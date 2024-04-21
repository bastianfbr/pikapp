import Image from "next/image";

interface ThumbnailProps {
  name: string;
  price: string;
  icon: string;
  qrcode: string;
}

export default function Thumbnail({
  name,
  price,
  icon,
  qrcode,
}: Readonly<ThumbnailProps>) {
  return (
    <div className="relative bg-white rounded-3xl thumbnail">
      <div className="absolute top-[18px] left-[136px] text-black font-semibold text-lg">
        {name}
      </div>
      <div className="absolute top-[72px] left-[136px] font-normal text-black text-lg">
        {price}
      </div>
      <Image
        className="absolute object-cover rounded-lg thumbnail-icon"
        alt="App Icon"
        src={icon}
        width={98}
        height={98}
      />
      <Image
        className="absolute object-cover thumbnail-qrcode"
        alt="QR Code"
        src={qrcode}
        width={72}
        height={72}
      />
    </div>
  );
}
