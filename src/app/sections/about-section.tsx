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
    {
        label: "Fellowship",
        items: [
            { value: "NSF CSGrad4US Awardee", href: "https://cra.org/csgrad4us/" },
        ],
    },
    {
        label: "Experience",
        items: [
            { value: "SWE at Cisco Meraki", href: "https://meraki.cisco.com/", detail: "Enterprise networking · Full stack" },
        ],
    },
];

export const AboutSection = () => {
    return (
        <section className="relative flex flex-col max-w-[1340px] w-full z-10 py-6 scroll-mt-28" id="about">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-start">
                <div className="xl:col-span-7 flex flex-col gap-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl jelly-text">ABOUT</h2>
                    <p className="text-md md:text-lg lg:text-xl text-[#ccc] max-w-[68ch]">
                        {"I'm a "}
                        <Link
                            href="https://mde.harvard.edu"
                            className="text-[#bbb] text-md md:text-lg lg:text-xl"
                            target="_blank"
                            showAnchorIcon
                            rel="noopener noreferrer"
                        >
                            Harvard MDE candidate
                        </Link>
                        , MIT research affiliate, and{" "}
                        <Link
                            href="https://cra.org/csgrad4us/"
                            className="text-[#bbb] text-md md:text-lg lg:text-xl"
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
                            className="text-md md:text-lg lg:text-xl text-[#bbb]"
                            target="_blank"
                            showAnchorIcon
                            rel="noopener noreferrer"
                        >
                            Cisco Meraki
                        </Link>.
                    </p>
                </div>
                <div className="xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
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
        </section>
    );
};
