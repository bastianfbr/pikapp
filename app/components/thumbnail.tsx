import Image from "next/image";

export default function Thumbnail() {
  return (
    <div className="relative bg-white rounded-3xl thumbnail">
      <div className="absolute top-[18px] left-[136px] text-black font-semibold text-lg">
        Beeper
      </div>
      <div className="absolute top-[72px] left-[136px] font-normal text-black text-lg">
        💰Gratuit
      </div>
      <Image
        className="absolute object-cover rounded-lg thumbnail-icon"
        alt="App Icon"
        src="/app-icon.png"
        width={98}
        height={98}
      />
      <Image
        className="absolute object-cover thumbnail-qrcode"
        alt="QR Code"
        src="/qr-code.png"
        width={72}
        height={72}
      />
    </div>
  );
}
