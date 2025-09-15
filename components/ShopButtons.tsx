export default function ShopButtons() {
  return (
    <div className="gap-4 grid grid-cols-2 w-full">
      <button
        className="w-full bg-[#ecebe8] rounded-xl shadow hover:shadow-lg p-2 flex flex-col items-center text-center transition-all duration-200 transform hover:scale-110 hover:cursor-pointer"
        onClick={() =>
          window.open("https://shopee.co.id/kyra.outwear", "_blank")
        }
      >
        Shopee
      </button>
      <button
        className="w-full bg-[#ecebe8] rounded-xl shadow hover:shadow-lg p-2 flex flex-col items-center text-center transition-all duration-200 transform hover:scale-110 hover:cursor-pointer"
        onClick={() =>
          window.open("https://www.tokopedia.com/kyraoutwear", "_blank")
        }
      >
        Tokopedia
      </button>
    </div>
  );
}
