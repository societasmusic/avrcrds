export default function Home() {
    return (
        <>
            <div className="main__cover">
                <br />
                <h1>
                    <span className="mobile-disable">❋&nbsp;</span>
                    Welcome to <span className="stroke">Azure Vision Records</span>
                </h1>
                <div className="main__cover-inner">
                    <video className="background-video" autoPlay muted loop playsInline>
                        <source src="/video/spinner.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    );
}
