export default function Header() {
    return (
        <>
            <div className="header">
                <div className="header__section" id="header__left">
                    <a href="/">
                        <img className="header__logo" src="/img/AVR-Logo-V1-Black-Transparent-v2.png" alt="Azure Vision Records logo In Black"/>
                    </a>
                </div>
                <div className="header__section" id="header__right">
                    <ul className="header__nav">
                        <li id="list-item-0"><a href="/">Home</a></li>
                        {/* <li id="list-item-1"><a href="/artists">Artists</a></li> */}
                        {/* <li id="list-item-2"><a href="/catalog">Catalog</a></li> */}
                        <li id="list-item-3"><a href="/demos">Demos</a></li>
                        <li id="list-item-4"><a href="/licensing">Licensing</a></li>
                        {/* <li id="list-item-4"><a href="/account">Account</a></li> */}
                        <li id="list-item-5"><a href="https://store.societasmusic.com/collection/azure-vision-records" target="_blank">Store</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}