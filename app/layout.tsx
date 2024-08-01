import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Hackathon | Global Chess League 2024",
  description: "Join us for the Global Chess League 2024 hackathon!",
  openGraph: {
    title: "Hackathon | Global Chess League 2024",
    description: "Join us for the Global Chess League 2024 hackathon!",
    url: "https://gcl-tan.vercel.app/",
    siteName: "Global Chess League",
    images: [
      {
        url: "/og_image_gcl.jpg",
        width: 800,
        height: 600,
        alt: "Global Chess League 2024",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackathon | Global Chess League 2024",
    description: "Join us for the Global Chess League 2024 hackathon!",
    images: ["/og_image_gcl.jpg"],
  },
  icons: {
    icon: "/fav_icon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
