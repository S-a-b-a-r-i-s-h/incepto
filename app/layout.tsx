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
//   openGraph: {
//     title: "INCEPTO",
//     description: "A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit.",
//     images: [
//       {
//         url: "/opengraph-image.png",
//         width: 1200,
//         height: 630,
//         alt: "INCEPTO",
//       },
//     ],
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
        <meta name="description" content="A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit." />
        <meta property="og:title" content="INCEPTO" />
        <meta property="og:description" content="A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit." />
        <meta property="og:image" content="/opengraph-image.png" />
      </head>
      <body className={`${dmSans.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
