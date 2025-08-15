import Footer from '@/layout/footer';
import Head from 'next/head';
const About = () => {

    return (
        <>
            <Head>
                <title>About Codevolution</title>
                <meta name="description" content="Free tutorials on web development" />
            </Head>
            <div>
                <h1 className="content" >AboutPage</h1>
            </div>
        </>

    )
}

export default About

About.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}