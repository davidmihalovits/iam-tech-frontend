import Head from "next/head";
import "../styles/globals.sass";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="keywords"
                    content="IT solutions, consultation, manage services"
                />
                <meta name="description" content="IAM Technologies" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;500;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <title>IAM Technologies</title>
            </Head>

            <Navbar />

            <Component {...pageProps} />

            <Footer />
        </>
    );
};

export default App;
