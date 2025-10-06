export const MusicSection = () => {
    return (
        <section className="relative flex flex-col w-full gap-4 max-w-[1340px] w-full" id="music">
            <h2 className="text-4xl pb-4">MUSIC</h2>
            <div className="flex flex-col items-start w-full flex-wrap justify-start gap-4">
            <div className="w-full" dangerouslySetInnerHTML={{
                __html: `<iframe loading="lazy" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2104079286%3Fsecret_token%3Ds-rfu0O4UCQW7&color=%23ff5500&inverse=true&auto_play=false&show_user=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sebastian-monzon-162975966" title="Sebastian Monzon" target="_blank" style="color: #cccccc; text-decoration: none;">Sebastian Monzon</a> · <a href="https://soundcloud.com/sebastian-monzon-162975966/change-your-mind/s-rfu0O4UCQW7" title="Change Your Mind" target="_blank" style="color: #cccccc; text-decoration: none;">Change Your Mind</a></div>`
            }} />
            <div className="w-full" dangerouslySetInnerHTML={{
                __html: `<iframe loading="lazy" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2104074654%3Fsecret_token%3Ds-eWppmwm4hhF&color=%23ff5500&inverse=true&auto_play=false&show_user=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sebastian-monzon-162975966" title="Sebastian Monzon" target="_blank" style="color: #cccccc; text-decoration: none;">Sebastian Monzon</a> · <a href="https://soundcloud.com/sebastian-monzon-162975966/otv/s-eWppmwm4hhF" title="O.T.V." target="_blank" style="color: #cccccc; text-decoration: none;">O.T.V.</a></div>`
            }} />
            <div className="w-full" dangerouslySetInnerHTML={{
                __html: `<iframe loading="lazy" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2104085643%3Fsecret_token%3Ds-PCdxEUt6KNu&color=%23ff5500&inverse=true&auto_play=false&show_user=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sebastian-monzon-162975966" title="Sebastian Monzon" target="_blank" style="color: #cccccc; text-decoration: none;">Sebastian Monzon</a> · <a href="https://soundcloud.com/sebastian-monzon-162975966/fine-by-me/s-PCdxEUt6KNu" title="Fine By Me" target="_blank" style="color: #cccccc; text-decoration: none;">Fine By Me</a></div>`
            }} />
            <div className="w-full" dangerouslySetInnerHTML={{
                __html: `<iframe loading="lazy" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2104082097%3Fsecret_token%3Ds-GgmoUN4Haeh&color=%23ff5500&inverse=true&auto_play=false&show_user=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sebastian-monzon-162975966" title="Sebastian Monzon" target="_blank" style="color: #cccccc; text-decoration: none;">Sebastian Monzon</a> · <a href="https://soundcloud.com/sebastian-monzon-162975966/sos-breathe/s-GgmoUN4Haeh" title="S.O.S (Breathe)" target="_blank" style="color: #cccccc; text-decoration: none;">S.O.S (Breathe)</a></div>`
            }} />
            </div>
            {/* <div className="flex flex-col items-center w-full">
                <iframe
                    className="rounded-lg shadow-lg w-full max-w-2xl"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/957433756%3Fsecret_token%3Ds-6pKAFotZyOD&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    title="SoundCloud Player"
                />
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center truncate w-full max-w-2xl">
                    <a
                        href="https://soundcloud.com/sebastian-monzon-162975966"
                        title="Sebastian Monzon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Sebastian Monzon
                    </a>
                    {" · "}
                    <a
                        href="https://soundcloud.com/sebastian-monzon-162975966/s-a-g-a-b/s-6pKAFotZyOD"
                        title="Guitar Track"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Guitar Track
                    </a>
                </div>
            </div> */}
        </section>
    )
}