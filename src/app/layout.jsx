import Footer from "@/components/Footer";
import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="description" content="Chicago-Based Independent Record Label | Azure Vision Records"/>
				<meta property="og:site_name" content="Azure Vision Records"/>
				<meta property="og:title" content="Azure Vision Records"/>
				<meta property="og:url" content="https://www.avrcrds.co"/>
				<meta property="og:image" content="https://www.avrcrds.co/img/socialsharing-banner.jpg"/>
				<meta property="og:type" content="website"/>
				<meta property="og:description" content="Chicago-Based Independent Record Label | Azure Vision Records"/>
				<meta property="og:locale" content="en_US"/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:site" content="@avrcrds"/>
				<meta name="twitter:title" content="Azure Vision Records"/>
				<meta name="twitter:description" content="Chicago-Based Independent Record Label | Azure Vision Records"/>
				<meta name="twitter:image" content="https://www.avrcrds.co/img/socialsharing-banner.jpg"/>
				{/* <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-JL9S5K561J"></script> */}
				{/* <script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-JL9S5K561J');
				</script> */}
				<link rel="canonical" href="https://www.avrcrds.co"/>
				<link rel="icon" type="image/x-icon" href="/img/AVR_Favicon.ico"/>
				<link rel="stylesheet" href="https://use.typekit.net/xhe4bje.css"/>
				<title>Azure Vision Records</title>
			</head>
			<body>
				<Header/>
				<div className="main">
					{children}
				</div>
				<Footer/>
			</body>
		</html>
	);
}
