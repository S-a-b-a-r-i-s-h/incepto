import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-dm-sans',
}) 

export const metadata: Metadata = {
  title: "INCEPTO",
  description: "A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit.",
  openGraph:{
    title: "INCEPTO",
    description: "A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit.",
    images:[
      {
        url: "./opengraph-image.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${dmSans.className} bg-black`}>{children}</body>
    </html>
  );
}
