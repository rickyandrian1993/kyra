import type { Metadata } from "next";
import { JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fontSans = Source_Sans_3({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyra Outwear | Cardigan & Fashion Trendy",
  description:
    "Kyra Outwear menjual cardigan, outerwear, dan fashion stylish lainnya. Temukan koleksi baju terbaru dengan desain modern, elegan, dan nyaman dipakai sehari-hari.",
  keywords: [
    "Kyra Outwear",
    "cardigan wanita",
    "outerwear",
    "fashion wanita",
    "baju trendy",
    "pakaian stylish",
    "online shop fashion",
  ],
  icons: [
    {
      rel: "icon",
      url: "/favicon.jpg",
    },
  ],
  openGraph: {
    title: "Kyra Outwear | Cardigan & Fashion Trendy",
    description:
      "Koleksi cardigan dan fashion stylish dari Kyra Outwear. Belanja online dengan mudah, desain modern & nyaman dipakai sehari-hari.",
    url: "https://kyraoutwear.com", // ganti dengan domain asli
    siteName: "Kyra Outwear",
    images: [
      {
        url: "/og.jpg", // ganti dengan image promosi/brand
        width: 1200,
        height: 630,
        alt: "Kyra Outwear - Cardigan & Fashion",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
