import type { Metadata } from "next";
import { userAgent } from "next/server";
import { headers } from "next/headers";

import { codingProjects, engineeringProjects } from "../projects";
import { GridGallery } from "../sections/grid-gallery";
import { SmonzonNavbar } from "../smonzon-navbar";
import { ContactFooter } from "../contact-footer";

export const metadata: Metadata = {
  title: "Projects | Sebastian Monzon",
  description: "Software and hardware projects by Sebastian Monzon",
};

export default async function ProjectsPage() {
  const headersData = await headers();
  const { device } = userAgent({ headers: headersData });
  const isMobileDevice = device.type === "mobile";

  const projects = [...codingProjects, ...engineeringProjects].sort(
    (a, b) => a.awesomeness - b.awesomeness
  );

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <SmonzonNavbar isMobileDevice={isMobileDevice} />
      <main className="relative flex flex-col px-4 md:px-6 items-center pt-20">
        <div className="relative flex flex-col max-w-[1340px] w-full">
          <GridGallery
            projects={projects}
            sectionId="projects"
            title="PROJECTS"
            titleClassName="text-5xl md:text-7xl pb-6"
            isMobileDevice={isMobileDevice}
          />
        </div>
        <ContactFooter />
      </main>
    </div>
  );
}
