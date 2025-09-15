"use client";

import Background from "@/assets/bg.jpg";
import Avatar from "@/components/Avatar";
import Whatsapp from "@/components/Whatsapp";

export default function HomePage() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <div>Welcome to Kyra Outwear</div>;
  // }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed p-4"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 w-full max-w-md text-center shadow-xl relative">
        <Avatar />
      </div>
      <Whatsapp />
    </div>
  );
}
