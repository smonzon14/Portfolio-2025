import type { Metadata } from "next";
import { userAgent } from "next/server";
import { headers } from "next/headers";

import { researchProjects } from "../projects";
import { GridGallery } from "../sections/grid-gallery";
import { SmonzonNavbar } from "../smonzon-navbar";
import { ContactFooter } from "../contact-footer";

export const metadata: Metadata = {
  title: "Research | Sebastian Monzon",
  description: "Research projects by Sebastian Monzon",
};

export default async function ResearchPage() {
  const headersData = await headers();
  const { device } = userAgent({ headers: headersData });
  const isMobileDevice = device.type === "mobile";

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <SmonzonNavbar isMobileDevice={isMobileDevice} />
      <main className="relative flex flex-col px-4 md:px-6 items-center pt-20">
        <div className="relative flex flex-col max-w-[1340px] w-full">
          <GridGallery
            projects={researchProjects}
            sectionId="research"
            title="RESEARCH"
            titleClassName="text-5xl md:text-7xl pb-6"
            isMobileDevice={isMobileDevice}
          />
        </div>
        <ContactFooter />
      </main>
    </div>
  );
}
