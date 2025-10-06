"use client";
import React, { useEffect, useRef, useState } from "react";

const SoundCloudEmbed: React.FC<{ html: string }> = ({ html }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        ref.current.innerHTML = html;

        const iframe = ref.current.querySelector("iframe");
        if (iframe) {
            const onLoad = () => setLoading(false);
            iframe.addEventListener("load", onLoad);
            // fallback in case load never fires
            const timeout = setTimeout(() => setLoading(false), 30000);
            return () => {
                iframe.removeEventListener("load", onLoad);
                clearTimeout(timeout);
            };
        } else {
            setLoading(false);
        }
    }, [html]);

    return (
        <div className="w-full relative min-h-[32px]">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-black/70 z-10">
                    <svg className="animate-spin h-5 w-5 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                </div>
            )}
            <div ref={ref} />
        </div>
    );
};
export const MusicSection = () => {
    return (
        <section className="relative flex flex-col w-full gap-4 max-w-[1340px] w-full" id="music">
            <h2 className="text-4xl pb-4">MUSIC</h2>
            <div className="flex flex-col items-start w-full flex-wrap justify-start gap-4">
                {[
                    {
                        iframe: `<iframe defer loading="lazy" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2104079286%3Fsecret_token%3Ds-rfu0O4UCQW7&color=%23ff5500&inverse=true&auto_play=false&show_user=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sebastian-monzon-162975966" title="Sebastian Monzon" target="_blank" style="color: #cccccc; text-decoration: none;">Sebastian Monzon</a> · <a href="https://soundcloud.com/sebastian-monzon-162975966/change-your-mind/s-rfu0O4UCQW7" title="Change Your Mind" target="_blank" style="color: #cccccc; text-decoration: none;">Change Your Mind</a></div>`,
                        key: "change-your-mind"
                    },
                    {
                        iframe: `<iframe defer loading="lazy" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2104074654%3Fsecret_token%3Ds-eWppmwm4hhF&color=%23ff5500&inverse=true&auto_play=false&show_user=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sebastian-monzon-162975966" title="Sebastian Monzon" target="_blank" style="color: #cccccc; text-decoration: none;">Sebastian Monzon</a> · <a href="https://soundcloud.com/sebastian-monzon-162975966/otv/s-eWppmwm4hhF" title="O.T.V." target="_blank" style="color: #cccccc; text-decoration: none;">O.T.V.</a></div>`,
                        key: "otv"
                    },
                    {
                        iframe: `<iframe defer loading="lazy" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2104085643%3Fsecret_token%3Ds-PCdxEUt6KNu&color=%23ff5500&inverse=true&auto_play=false&show_user=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sebastian-monzon-162975966" title="Sebastian Monzon" target="_blank" style="color: #cccccc; text-decoration: none;">Sebastian Monzon</a> · <a href="https://soundcloud.com/sebastian-monzon-162975966/fine-by-me/s-PCdxEUt6KNu" title="Fine By Me" target="_blank" style="color: #cccccc; text-decoration: none;">Fine By Me</a></div>`,
                        key: "fine-by-me"
                    },
                    {
                        iframe: `<iframe defer loading="lazy" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2104082097%3Fsecret_token%3Ds-GgmoUN4Haeh&color=%23ff5500&inverse=true&auto_play=false&show_user=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sebastian-monzon-162975966" title="Sebastian Monzon" target="_blank" style="color: #cccccc; text-decoration: none;">Sebastian Monzon</a> · <a href="https://soundcloud.com/sebastian-monzon-162975966/sos-breathe/s-GgmoUN4Haeh" title="S.O.S (Breathe)" target="_blank" style="color: #cccccc; text-decoration: none;">S.O.S (Breathe)</a></div>`,
                        key: "sos-breathe"
                    }
                ].map(({ iframe, key }) => (
                    <SoundCloudEmbed key={key} html={iframe} />
                ))}
            </div>

        </section>
    )
}