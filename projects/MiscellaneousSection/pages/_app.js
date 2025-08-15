import 'styles/globals.css'
import 'styles/layout.css'
import Head from 'next/head';
import Header from '@/layout/header';
import Footer from '@/layout/footer';


function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="description" content="best youtube channel" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
