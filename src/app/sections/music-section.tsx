export const MusicSection = () => {
    return (
        <section className="relative flex flex-col max-w-[1340px] w-full gap-4" id="music">
            <h2 className="text-4xl font-bold self-center mb-4 text-primary-900 dark:text-primary-100">Music</h2>
            <div className="flex flex-row items-center w-full flex-wrap justify-center gap-4">
            <div dangerouslySetInnerHTML={{
                __html: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2103451953%3Fsecret_token%3Ds-SnoQPMtLTBk&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sebastian-monzon-162975966" title="Sebastian Monzon" target="_blank" style="color: #cccccc; text-decoration: none;">Sebastian Monzon</a> · <a href="https://soundcloud.com/sebastian-monzon-162975966/haunted/s-SnoQPMtLTBk" title="Haunted" target="_blank" style="color: #cccccc; text-decoration: none;">Haunted</a></div>`
            }} />
            <div dangerouslySetInnerHTML={{
                __html: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/957433756%3Fsecret_token%3Ds-6pKAFotZyOD&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sebastian-monzon-162975966" title="Sebastian Monzon" target="_blank" style="color: #cccccc; text-decoration: none;">Sebastian Monzon</a> · <a href="https://soundcloud.com/sebastian-monzon-162975966/s-a-g-a-b/s-6pKAFotZyOD" title="Guitar Track" target="_blank" style="color: #cccccc; text-decoration: none;">Guitar Track</a></div>`
            }} />
            <div dangerouslySetInnerHTML={{
                __html: ``
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