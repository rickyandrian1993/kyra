import { FaInstagram, FaTiktok } from "react-icons/fa6";

export default function ContactInformation() {
  const openInstagram = () => {
    const url = `https://www.instagram.com/kyra.outwear/`;
    window.open(url, "_blank");
  };

  const openTikTok = () => {
    const url = `https://www.tiktok.com/@kyra.outwear`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-center align-middle space-x-6 m-4 text-black-600">
      <button className="text-lg hover:cursor-pointer" onClick={openInstagram}>
        <FaInstagram />
      </button>
      <button className="text-lg hover:cursor-pointer" onClick={openTikTok}>
        <FaTiktok />
      </button>
    </div>
  );
}
