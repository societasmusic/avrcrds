import { ArtistList } from "@/lib/artistList";
import Image from "next/image";
import Link from "next/link";

export default function Artists() {
    return (
        <div className="main__content" id="artists">
            <h1>Artists</h1>
            <br/>
            <p>Learn about the core artists behind their music and discover the unique sounds thats characterize Azure Vision Records and our community.</p>
            <div className="artists__grid">
                {ArtistList.map((e, i) => (
                    <div className="artists__grid-cell" id={e.name.toLowerCase()} key={i}>
                        {e.imageUrl && <img src={e.imageUrl} className="artists__grid-cell-image"/>}
                        <h2 className="artists__grid-cell-header">{e.name}</h2>
                        <div className="artists__grid-cell-socials">
                            {e.spotify && <Link href={e.spotify} target="_black"><Image className="socials__icon" src="/spotify.svg" height="36" width="36" alt={`${e.name} Spotify logo`}/></Link>}
                            {e.applemusic && <Link href={e.applemusic} target="_black"><Image className="socials__icon" src="/applemusic.svg" height="36" width="36" alt={`${e.name} Apple Music logo`}/></Link>}
                            {e.instagram && <Link href={e.instagram} target="_black"><Image className="socials__icon" src="/instagram.svg" height="36" width="36" alt={`${e.name} Instagram logo`}/></Link>}
                            {e.twitterx && <Link href={e.twitterx} target="_black"><Image className="socials__icon" src="/x.svg" height="36" width="36" alt={`${e.name} Twitter/X logo`}/></Link>}
                            {e.youtube && <Link href={e.youtube} target="_black"><Image className="socials__icon" src="/youtube.svg" height="36" width="36" alt={`${e.name} YouTube logo`}/></Link>}
                            {e.website && <Link href={e.website} target="_black"><Image className="socials__icon" src="/globe.svg" height="36" width="36" alt={`${e.name} globe icon`}/></Link>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}