import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[680px] overflow-hidden">
      <Image
        src="/lumko-revamped/images/lumkomdx-map-no-logo.png"
        alt=""
        width={900}
        height={880}
        priority
        unoptimized
        className="h-auto w-full scale-[1.08] object-contain"
      />
    </div>
  );
}
