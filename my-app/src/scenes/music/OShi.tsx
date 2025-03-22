import React from 'react';
import Box from "@mui/material/Box";
import AnoStack from "./AnoStack";
export default function OShi() {

    return(<>
        <Box display={{sm: 'block', md: 'flex'}} mt={{xs: 4, sm: 4, md: 0}} flexDirection={'column'}>
            <Box justifyContent={'center'} width={'100%'}>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/nC5c9aW1mbI?si=BlhaxE7WoufURNSh"
                        title="ano" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/xniehuh4ofI?si=Us8bwwUtzMooRkxl"
                        title="firstTake1" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/ADf36atCSvw?si=aNSdUz4voVUcA5V3"
                        title="firstTake2" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/P9JubUlyUGM?si=uNldRoAHM2fSVbQi"
                        title="I's" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/D79Na7Kik0w?si=1T4yXbG-QSixIYZj"
                        title="anoChannel" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className="youtubeIframe" src="https://www.youtube.com/embed/hKAGqzHD77k?si=bfthqddQ2NR7OlqK"
                        title="anoneru" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className="youtubeIframe"
                        src="https://www.youtube.com/embed/Myrpznjx1wo?si=6IWsh35FtPjShS3q"
                        title="YouTubeFull" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe
                    src="https://open.spotify.com/embed/artist/7Il739Q5W4yJUYC3hfnX6z?utm_source=generator"
                    className="spotifyFrame" frameBorder="0" allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
            </Box>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <AnoStack/>
            </Box>
        </Box>
    </>);
}