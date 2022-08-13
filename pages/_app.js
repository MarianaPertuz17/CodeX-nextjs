/* eslint-disable react/no-unknown-property */
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Open+Sans:wght@300;400;600&family=Raleway:wght@300;400;500;700;800;900&family=Syne:wght@800&display=swap" rel="stylesheet" /> 
      </Head>
      <Component {...pageProps} />
      
    </>
  )
}

export default MyApp;
