import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer__upper">
                    <h2>Follow Azure Vision Records</h2>
                    <div className="footer__socials">
                        <ul className="footer__socials-list footer__socials-list--desktop">
                            <li className="footer__socials-list-item">
                                <a href="https://instagram.com/avrcrds" className="footer__socials-list-item-link" target="_blank">
                                    <Image src="/instagram.svg" height="36" width="36" alt="Societas Music Group Instagram logo"/>
                                </a>
                            </li>
                            <li className="footer__socials-list-item">
                                <a href="https://x.com/avrcrds" className="footer__socials-list-item-link" target="_blank">
                                    <Image src="/x.svg" height="36" width="36" alt="Societas Music Group X/Twitter logo"/>
                                </a>
                            </li> 
                            <li className="footer__socials-list-item">
                                <a href="https://sptfy.com/avrcrds" className="footer__socials-list-item-link" target="_blank">
                                    <Image src="/spotify.svg" height="36" width="36" alt="Societas Music Group Spotify logo"/>
                                </a>
                            </li>
                            <li className="footer__socials-list-item">
                                <a href="https://youtube.com/@avrcrds" className="footer__socials-list-item-link" target="_blank">
                                    <Image src="/youtube.svg" height="36" width="36" alt="Societas Music Group YouTube logo"/>
                                </a>
                            </li>
                            <li className="footer__socials-list-item">
                                <a href="https://discord.gg/NVfHVRVaHN" className="footer__socials-list-item-link" target="_blank">
                                    <Image src="/discord.svg" height="36" width="36" alt="Societas Music Group Discord logo"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="https://www.societasmusic.com/privacy-policy" target="_blank"><p><u>Privacy Policy</u></p></a>
                </div>
                <div className="footer__lower">
                    <a href="/">
                        <img src="/img/AVR-Logo-V1-Black-Transparent-v2.png" alt="Azure Vision Records Logo in White"/>
                    </a>
                    <p>Chicago-Based Independent Record Label</p>
                </div>
                <div className="footer__links">
                    <ul className="footer__links-list">
                        <li className="footer__links-list-item"><a href="https://www.societasmusic.com" target="_blank">© 2024 Societas Music Group Corporation</a></li>
                        <li className="footer__links-list-item"><a href="https://www.societasmusic.com/privacy-policy" target="_blank">Privacy Policy</a></li>
                        <li className="footer__links-list-item"><a href="https://www.societasmusic.com/terms-of-service" target="_blank">Terms of Service</a></li>
                        <li className="footer__links-list-item"><a href="https://www.societasmusic.com/for-artists" target="_blank">Artist Resources</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}