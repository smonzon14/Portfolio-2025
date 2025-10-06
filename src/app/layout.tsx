import type { Metadata } from "next";
import "./globals.css";
import {HeroUIProvider} from "@heroui/system";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smonzon.com'),
  title: "Sebastian Monzon",
  description: "Curriculum Vitae of Sebastian Monzon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`antialiased min-h-max h-full`}
      >
        <HeroUIProvider>
          {children}
        </HeroUIProvider>
        <SpeedInsights/>
      </body>
    </html>
  );
}
