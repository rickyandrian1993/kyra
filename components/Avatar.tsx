import kyra from "@/assets/avatar.jpg";
import Image from "next/image";

export default function Avatar() {
  return (
    <div className="w-32 h-32 rounded-full mx-auto relative overflow-hidden mb-4">
      <Image
        fill
        src={kyra}
        alt="KYRA OUTWEAR"
        className="object-cover rounded-full"
      />
    </div>
  );
}
