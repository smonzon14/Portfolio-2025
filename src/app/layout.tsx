import type { Metadata } from "next";
import "./globals.css";
import {HeroUIProvider} from "@heroui/system";

export const metadata: Metadata = {
  title: "Sebastian Monzon",
  description: "Curriculum Vitae of Sebastian Monzon",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
