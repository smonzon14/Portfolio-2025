import Image from "next/image";
import { Link } from "@heroui/link";
import { SpecTile, DottedLeader } from "../spec-tile";

const credentials: {
    label: string;
    items: { value: string; href?: string; detail?: string; date?: string }[];
}[] = [
    {
        label: "Education",
        items: [
            { value: "Harvard MDE Candidate", date: "'26-'28", href: "https://mde.harvard.edu" },
            { value: "UMass Amherst BS in CS", date: "'19-'23" },
        ],
    },
    {
        label: "Research",
        items: [
            { value: "MIT Research Affiliate", detail: "Media Lab · Dept. of Mechanical Engineering" },
        ],
    },
];

export const AboutSection = () => {
    return (
        <section className="relative flex flex-col max-w-[1340px] w-full z-10 py-6 scroll-mt-28" id="about">
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
                <Image
                    src="/profile1.jpg"
                    alt="Sebastian Monzón"
                    width={500}
                    height={500}
                    className="object-cover border-1 border-white/10 w-full max-w-[420px] md:w-[320px] lg:w-[380px] aspect-square shrink-0 self-center md:self-start"
                />
                <div className="flex flex-col gap-8 flex-1">
                    <p className="text-md lg:text-lg text-[#ccc]">
                        {"I'm a "}
                        <Link
                            href="https://mde.harvard.edu"
                            className="text-[#bbb] text-md"
                            target="_blank"
                            showAnchorIcon
                            rel="noopener noreferrer"
                        >
                            Harvard MDE candidate
                        </Link>
                        , MIT research affiliate, and{" "}
                        <Link
                            href="https://cra.org/csgrad4us/"
                            className="text-[#bbb] text-md"
                            target="_blank"
                            showAnchorIcon
                            rel="noopener noreferrer"
                        >
                            NSF CSGrad4US fellowship awardee
                        </Link>
                        {" "}building{" "}
                        <b className="text-white">
                            multimodal AI and embedded systems that transform human signals into sound and insight
                        </b>
                        . I explore expressive interfaces, wireless sensing wearables, and material-optimizing frameworks. Ex-SWE at{" "}
                        <Link
                            href="https://meraki.cisco.com/"
                            className="text-md text-[#bbb]"
                            target="_blank"
                            showAnchorIcon
                            rel="noopener noreferrer"
                        >
                            Cisco Meraki
                        </Link>.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {credentials.map((cred) => (
                            <SpecTile key={cred.label} label={cred.label}>
                                {cred.items.map((item) => (
                                    <div key={item.value} className="flex flex-col">
                                        <div className="flex flex-row items-baseline gap-2">
                                            {item.href ? (
                                                <Link
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white text-md"
                                                >
                                                    {item.value}
                                                </Link>
                                            ) : (
                                                <span className="text-white text-md">{item.value}</span>
                                            )}
                                            {item.date && (
                                                <>
                                                    <DottedLeader />
                                                    <span className="text-sm text-white/50 whitespace-nowrap">
                                                        {item.date}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        {item.detail && (
                                            <span className="text-sm text-white/50">{item.detail}</span>
                                        )}
                                    </div>
                                ))}
                            </SpecTile>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
