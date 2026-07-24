"use client";
import NextLink from "next/link";
import { Link } from "@heroui/link";

const footerLinks = [
    { label: "smonzon360@gmail.com", href: "mailto:smonzon360@gmail.com" },
    { label: "(781) 530-8016", href: "sms://17815308016" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sebastian-monz%C3%B3n-9ab695102/", external: true },
    { label: "GitHub", href: "https://github.com/smonzon14", external: true },
];

export const ContactFooter = () => {
    return (
        <footer className="w-full border-t-1 border-white/10 mt-20">
            <div className="max-w-[1340px] mx-auto w-full py-10 flex flex-col md:flex-row gap-6 justify-between md:items-center">
                <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-white/40">
                        Sebastian Monzón
                    </span>
                    <span className="text-sm text-white/50">
                        Multimodal AI · Embedded Systems · Sound
                    </span>
                </div>
                <div className="flex flex-row flex-wrap gap-x-8 gap-y-2 items-center">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-white/70 hover:text-white text-sm"
                            {...(link.external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        as={NextLink}
                        href="/contact"
                        className="text-white/50 hover:text-white text-sm"
                    >
                        Contact →
                    </Link>
                </div>
            </div>
        </footer>
    );
};
