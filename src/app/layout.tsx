import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Tasty Station Restaurant | One Destination, Every Flavor',
  description: 'Experience the world\'s finest multicultural cuisine at Tasty Station Restaurant. From Arabic to Indian, Filipino, Chinese, and Continental dishes, explore authentic and delicious flavors under one roof. Reserve your table or order online today!',
  keywords: ["restaurant, multicultural cuisine, arabic food, indian food, filipino food, chinese food, continental food, fine dining, international cuisine, tasty station, food, menu, reservations, online ordering"],
  openGraph: {
    "title": "Tasty Station Restaurant | One Destination, Every Flavor",
    "description": "Experience the world's finest multicultural cuisine at Tasty Station Restaurant. From Arabic to Indian, Filipino, Chinese, and Continental dishes, explore authentic and delicious flavors under one roof.",
    "url": "https://www.tastystation.com",
    "siteName": "Tasty Station Restaurant",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/sliced-salmon-with-arugula-grapefruit-sauce_141793-954.jpg",
        "alt": "Tasty Station Restaurant Hero Image"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Tasty Station Restaurant | One Destination, Every Flavor",
    "description": "Experience the world's finest multicultural cuisine at Tasty Station Restaurant. From Arabic to Indian, Filipino, Chinese, and Continental dishes, explore authentic and delicious flavors under one roof.",
    "images": [
      "http://img.b2bpic.net/free-photo/sliced-salmon-with-arugula-grapefruit-sauce_141793-954.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
