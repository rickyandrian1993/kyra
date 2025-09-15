import kyra from "@/assets/avatar.jpg";
import Image from "next/image";

export default function Avatar() {
  return (
    <>
      <div className="w-32 h-32 rounded-full mx-auto relative overflow-hidden mb-2">
        <Image
          priority
          sizes="100"
          fill
          src={kyra}
          alt="KYRA OUTWEAR"
          className="object-cover rounded-full"
        />
      </div>
      <h1 className="text-2xl font-bold mb-1">Kyra Outwear</h1>
      <p className="text-sm text-gray-500">
        Kyra Outwear menjual cardigan dan outerwear yang stylish
      </p>
    </>
  );
}
