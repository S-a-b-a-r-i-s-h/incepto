import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import ogImage from "@/public/assets/opengraph-image.jpg";

import "./globals.css";
import { siteMetadataConfig } from "@/constants";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: "INCEPTO",
  description: "A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "INCEPTO",
    title:
      "INCEPTO",
    description:
      "A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit.",
    images: siteMetadataConfig.ogImage,
    url: "https://incepto24.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "INCEPTO",
    description:
      "A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit.",
    images: siteMetadataConfig.ogImage,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head> */}
        {/* <title>INCEPTO</title>
        <meta property="og:title" content="INCEPTO" />
        <meta property="og:description" content="A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit." />
        <meta property="og:url" content="https://incepto24.vercel.app" />
        <meta property="og:image" content="https://i.postimg.cc/DzvqrW8k/opengraph-image.png" />
        <meta name="twitter:title" content="INCEPTO" />
        <meta name="twitter:description" content="A nation-wide 24 hour hackathon happening at College of Engineering Perumon. It aims to provide a platform for innovative minds to unveil their technical and problem solving skills being alongside like minded individuals on a marathon spirit." />
        <meta name="twitter:image" content="https://i.postimg.cc/DzvqrW8k/opengraph-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/assets/favicon.ico" /> */}
      {/* </head> */}
      <body className={`${dmSans.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
