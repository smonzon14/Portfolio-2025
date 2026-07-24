import type { Metadata } from "next";
import { userAgent } from "next/server";
import { headers } from "next/headers";

import { MusicSection } from "../sections/music-section";
import { SmonzonNavbar } from "../smonzon-navbar";
import { ContactFooter } from "../contact-footer";

export const metadata: Metadata = {
  title: "Music | Sebastian Monzon",
  description: "Music produced by Sebastian Monzon",
};

export default async function MusicPage() {
  const headersData = await headers();
  const { device } = userAgent({ headers: headersData });
  const isMobileDevice = device.type === "mobile";

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <SmonzonNavbar isMobileDevice={isMobileDevice} />
      <main className="relative flex flex-col px-4 md:px-6 items-center pt-20">
        <MusicSection />
        <ContactFooter />
      </main>
    </div>
  );
}
