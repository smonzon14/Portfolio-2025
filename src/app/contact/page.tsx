import type { Metadata } from "next";
import { userAgent } from "next/server";
import { headers } from "next/headers";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { SpecTile, DottedLeader } from "../spec-tile";
import { SmonzonNavbar } from "../smonzon-navbar";
import { ContactFooter } from "../contact-footer";

export const metadata: Metadata = {
  title: "Contact | Sebastian Monzon",
  description: "Get in touch with Sebastian Monzon",
};

const contactRows = [
  { label: "Email", value: "smonzon360@gmail.com", href: "mailto:smonzon360@gmail.com" },
  { label: "Phone", value: "(781) 530-8016", href: "sms://17815308016" },
  {
    label: "LinkedIn",
    value: "sebastian-monzón",
    href: "https://www.linkedin.com/in/sebastian-monz%C3%B3n-9ab695102/",
    external: true,
  },
  { label: "GitHub", value: "smonzon14", href: "https://github.com/smonzon14", external: true },
];

export default async function ContactPage() {
  const headersData = await headers();
  const { device } = userAgent({ headers: headersData });
  const isMobileDevice = device.type === "mobile";

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <SmonzonNavbar isMobileDevice={isMobileDevice} />
      <main className="relative flex flex-col px-4 md:px-6 items-center pt-20 min-h-[70vh]">
        <section className="relative flex flex-col py-10 max-w-[1340px] w-full gap-8" id="contact">
          <h2 className="text-5xl md:text-7xl z-[21]">GET IN TOUCH</h2>
          <p className="text-md lg:text-lg text-[#ccc] max-w-[600px]">
            Whether it&#39;s research, a collaboration, or just to say hi - my inbox is
            always open.
          </p>

          <Button
            as={Link}
            size="lg"
            color="primary"
            className="text-white w-min"
            href="https://www.linkedin.com/in/sebastian-monz%C3%B3n-9ab695102/"
            target="_blank"
            rel="noopener noreferrer"
            showAnchorIcon
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
            </svg>
            LinkedIn
          </Button>

          <SpecTile label="Contact" className="w-full max-w-[520px]">
            {contactRows.map((row) => (
              <div key={row.label} className="flex flex-row items-baseline gap-2">
                <span className="text-xs uppercase tracking-widest text-white/40 whitespace-nowrap">
                  {row.label}
                </span>
                <DottedLeader />
                <Link
                  href={row.href}
                  className="text-white text-md"
                  {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {row.value}
                </Link>
              </div>
            ))}
          </SpecTile>
        </section>
        <ContactFooter />
      </main>
    </div>
  );
}
