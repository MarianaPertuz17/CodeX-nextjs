/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css';
import Head from 'next/head';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Open+Sans:wght@300;400;600&family=Raleway:wght@300;400;500;700;800;900&family=Syne:wght@800&display=swap" rel="stylesheet" /> 
      </Head>
      <Component {...pageProps} />
      
    </>
  )
}

export default MyApp;
