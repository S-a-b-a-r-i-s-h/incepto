import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Image from "next/image";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-dm-sans',
}) 

// export const metadata: Metadata = {
//   title: "INCEPTO",
//   description: "A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit.",
  
// };

// export const metadata: Metadata = {
//   title: "INCEPTO",
//   description: "A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit.",
//   icons: {
//     icon: "/favicon.ico",
//   }
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>INCEPTO</title>
        <meta property="og:title" content="INCEPTO" />
        <meta property="og:description" content="A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit." />
        <meta property="og:url" content="https://incepto24.vercel.app" />
        <meta property="og:image" content="https://i.postimg.cc/DzvqrW8k/opengraph-image.png" />
        <meta name="twitter:title" content="INCEPTO" />
        <meta name="twitter:description" content="A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit." />
        <meta name="twitter:image" content="https://i.postimg.cc/DzvqrW8k/opengraph-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body className={`${dmSans.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
