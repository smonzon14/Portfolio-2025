import type { Metadata } from "next";
import "./globals.css";
import {HeroUIProvider} from "@heroui/system";
import ogImage from "/public/projects/simulation-physics.gif";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smonzon.com'),
  title: "Sebastian Monzon",
  description: "Curriculum Vitae of Sebastian Monzon",
  openGraph: {
    images: [{ url: ogImage.src, width:ogImage.width, height: ogImage.height }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-max h-full`}
      >
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
